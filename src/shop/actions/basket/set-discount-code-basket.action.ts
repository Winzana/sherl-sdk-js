import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Applies a discount code to the current shopping basket.
 *
 * This function sends a POST request to apply a discount code to the current shopping basket. The discount code
 * is provided as a string. On successful application, it returns the updated order's information encapsulated
 * in an IOrderResponse object. If the process of applying the discount code to the basket encounters any errors,
 * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure of the
 * discount code application is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} code - The discount code to be applied to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after applying the discount code.
 * @throws {OrderErr.BASKET_DISCOUNT_CODE_FAILED} Throws an error if the application of the discount code to the basket fails.
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
