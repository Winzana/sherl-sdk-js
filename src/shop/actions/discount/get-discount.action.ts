import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IDiscount } from '../../types';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';

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

    if (response.status !== 200) {
      throw errorFactory.create(DiscountErr.FETCH_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.FETCH_FAILED);
  }
};
