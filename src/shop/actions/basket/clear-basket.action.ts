import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';

/**
 * Clears the shopping basket for a specified customer.
 *
 * This function sends a POST request to clear the shopping basket of a customer. The customer's unique ID
 * is provided to identify the basket to be cleared. On successful clearance, it returns a boolean value
 * indicating the success of the operation. If the process of clearing the basket encounters any errors,
 * such as a failure to connect to the endpoint or other issues, a specific error indicating the failure
 * of the basket clearance is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} customerId - The unique identifier of the customer whose basket is being cleared.
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the basket clearance.
 * @throws {OrderErr.BASKET_CLEAR_FAILED} Throws an error if the basket clearance fails.
 */
export const clearBasket = async (
  fetcher: Fetcher,
  customerId: string,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(endpoints.CLEAR_BASKET, {
      customerId,
    });

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_CLEAR_FAILED);
  }
};
