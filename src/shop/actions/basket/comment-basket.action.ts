import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Adds a comment to a shopping basket.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} comment - The comment to be added to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after adding the comment.
 */
export const commentBasket = async (
  fetcher: Fetcher,
  comment: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.post<IOrderResponse>(
      endpoints.COMMENT_BASKET,
      { comment },
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_COMMENT_FAILED);
  }
};
