import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
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
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_REMOVE_FAILED);
  }
};
