import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

/**
 * Adds a comment to a shopping basket.
 *
 * This function sends a POST request to add a comment to the current shopping basket. The comment is provided as a
 * string. On successful addition, it returns the updated order's information encapsulated in an IOrderResponse object.
 * If the process of adding the comment to the basket encounters any errors, such as a failure to connect to the endpoint
 * or other issues, a specific error indicating the failure of the comment addition is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} comment - The comment to be added to the basket.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the updated order after adding the comment.
 * @throws {OrderErr.BASKET_COMMENT_FAILED} Throws an error if the addition of the comment to the basket fails.
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
