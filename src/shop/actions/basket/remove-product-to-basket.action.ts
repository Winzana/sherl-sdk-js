import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Removes an item from a shopping basket.
 *
 * This function sends a DELETE request to remove a specific item, identified by its unique ID, from a shopping basket.
 * The item's unique ID is used to construct the endpoint for the request. On successful removal, it returns the updated
 * order's information encapsulated in an IOrderResponse object. If the process of removing the item from the basket
 * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
 * the failure of the item removal is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} itemId - The unique identifier of the item to be removed from the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after the item removal.
 * @throws {OrderErr.BASKET_REMOVE_FAILED} Throws an error if the removal of the item from the basket fails.
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
