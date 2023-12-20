import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { DiscountErr, errorFactory } from '../../errors/discount/errors';
import { IDiscountParameter, IDiscount } from '../../types';

/**
 * Validates payment for a shopping basket with pending status.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
 */
export const createDiscount = async (
  fetcher: Fetcher,
  parameter: IDiscountParameter,
): Promise<IDiscount> => {
  try {
    const response = await fetcher.post<IDiscount>(endpoints.DISCOUNTS, {
      ...parameter,
    });
    return response.data;
  } catch (error) {
    throw errorFactory.create(DiscountErr.POST_FAILED);
  }
};
