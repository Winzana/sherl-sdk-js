import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import {
  IOrderResponse,
  IShopBasketValidatePaymentInputDto,
} from '../../types';

/**
 * Validates payment for a shopping basket with pending status.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopBasketValidatePaymentInputDto} validation - The validation details for the pending payment of the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after validating the pending payment.
 */
export const validatePaymentBasket = async (
  fetcher: Fetcher,
  validation: IShopBasketValidatePaymentInputDto,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.VALIDATE_PENDING_BASKET,
      { validation },
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_VALIDATE_PENDING_FAILED);
  }
};
