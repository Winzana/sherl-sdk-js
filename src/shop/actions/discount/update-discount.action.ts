import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

/**
 * Updates an existing discount with the provided details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} discountId - The unique identifier of the discount to be updated.
 * @param {Partial<IDiscountParameter>} updatedDiscount - The partial data of the discount to be updated.
 * @returns {Promise<IDiscount>} A promise that resolves to the information of the updated discount.
 */
export const updateDiscount = async (
  fetcher: Fetcher,
  discountId: string,
  updatedDiscount: Partial<IDiscountParameter>,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.put<IDiscount>(
      StringUtils.bindContext(endpoints.MANAGE_DISCOUNT, {
        id: discountId,
      }),
      updatedDiscount,
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.UPDATE_FAILED);
  }
};
