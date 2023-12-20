import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Applies a discount code to the current shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The discount code to be applied to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the discount code.
 */
export const addDiscountCodeToBasket = async (
  fetcher: Fetcher,
  code: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.DISCOUNT_CODE_BASKET,
      { code },
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_DISCOUNT_CODE_FAILED);
  }
};
