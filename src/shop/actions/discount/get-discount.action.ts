import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IDiscount } from '../../types';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a specific discount by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the discount to be retrieved.
 * @returns {Promise<IDiscount>} A promise that resolves to the information of the specified discount.
 */
export const getDiscount = async (
  fetcher: Fetcher,
  id: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.get<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_NOT_FOUND);
      default:
        throw errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.GET_DISCOUNT_BY_ID_FAILED),
    );
  }
};
