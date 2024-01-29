import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { BasketErr, errorFactory } from '../../errors/basket/error';
import { IOrderResponse } from '../../types';

/**
 * Removes an item from a shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} itemId - The unique identifier of the item to be removed from the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after the item removal.
 */
export const removeItemToBasket = async (
  fetcher: Fetcher,
  itemId: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.delete<IOrderResponse>(
      StringUtils.bindContext(endpoints.REMOVE_PRODUCT_BASKET, {
        id: itemId,
      }),
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(BasketErr.BASKET_REMOVE_FORBIDDEN);
      case 404:
        throw errorFactory.create(BasketErr.PRODUCT_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(BasketErr.BASKET_REMOVE_FAILED),
        );
    }
  }
};
