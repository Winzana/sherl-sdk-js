import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscount } from '../../types';

/**
 * Deletes a specific discount identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} discountId - The unique identifier of the discount to be deleted.
 * @returns {Promise<IDiscount>} A promise that resolves to the information of the deleted discount.
 */
export const deleteDiscount = async (
  fetcher: Fetcher,
  discountId: string,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.delete<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, {
        id: discountId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(DiscountErr.DELETE_DISCOUNT_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(DiscountErr.DISCOUNT_NOT_FOUND);
      default:
        throw errorFactory.create(DiscountErr.DELETE_DISCOUNT_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(DiscountErr.DELETE_DISCOUNT_FAILED),
    );
  }
};
