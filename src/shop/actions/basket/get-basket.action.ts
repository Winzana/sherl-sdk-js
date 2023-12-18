import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Retrieves the current shopping basket for a specified customer.
 *
 * This function sends a GET request to fetch the current shopping basket associated with a given customer. The customer's
 * unique URI is provided to identify the specific basket to be retrieved. On successful retrieval, it returns the current
 * order's information encapsulated in an IOrderResponse object. If the process of fetching the basket encounters any errors,
 * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure of fetching the basket
 * is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} customerUri - The unique URI of the customer whose basket is being retrieved.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the current order (basket) for the specified customer.
 * @throws {OrderErr.BASKET_FETCH_FAILED} Throws an error if the fetching of the basket fails.
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
