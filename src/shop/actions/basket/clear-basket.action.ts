import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';

/**
 * Clears the shopping basket for a specified customer.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} customerId - The unique identifier of the customer whose basket is being cleared.
 * @returns {Promise<boolean>} A promise that resolves to a boolean indicating the success of the basket clearance.
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
