import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';

/**
 * Retrieves a specific order by its unique ID.
 *
 * This function sends a GET request to fetch details of an order using its unique identifier. The order ID is
 * used to construct the endpoint for the GET request. If the order is found successfully, it returns the order's
 * information encapsulated in an IOrderResponse object. In case of any errors, such as a failure to find the order
 * or connectivity issues, a specific error indicating the failure to find the order is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the order to be retrieved.
 * @returns {Promise<IOrderResponse>} A promise that resolves to the information of the specified order.
 * @throws {OrderErr.NOT_FOUND} Throws an error if the order is not found.
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
