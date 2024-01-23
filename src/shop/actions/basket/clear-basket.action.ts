import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';

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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(BasketErr.BASKET_CLEAR_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(BasketErr.BASKET_CLEAR_FAILED),
        );
    }
  }
};
