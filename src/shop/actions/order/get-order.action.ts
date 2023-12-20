import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';

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

    if (response.status !== 200) {
      throw errorFactory.create(OrderErr.NOT_FOUND);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.NOT_FOUND);
  }
};
