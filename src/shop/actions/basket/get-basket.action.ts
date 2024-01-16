import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Retrieves the current shopping basket for a specified customer.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} customerUri - The unique URI of the customer whose basket is being retrieved.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the current order (basket) for the specified customer.
 */
export const getCurrentBasket = async (
  fetcher: Fetcher,
  customerUri: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.get<IOrderResponse>(endpoints.GET_BASKET, {
      customerUri,
    });

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_FETCH_FAILED);
  }
};
