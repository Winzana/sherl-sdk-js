import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(BasketErr.GET_BASKET_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(BasketErr.CUSTOMER_NOT_FOUND);
      default:
        throw errorFactory.create(BasketErr.GET_BASKET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(BasketErr.GET_BASKET_FAILED),
    );
  }
};
