import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a specific order by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order to be retrieved.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the specified order.
 */
export const getOrder = async (
  fetcher: Fetcher,
  id: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.get<IOrderResponse>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrderErr.GET_ORDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORDER_NOT_FOUND);
      default:
        throw errorFactory.create(OrderErr.GET_ORDER_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(OrderErr.GET_ORDER_FAILED));
  }
};
