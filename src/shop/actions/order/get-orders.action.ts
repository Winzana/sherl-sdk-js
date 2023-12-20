import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';

/**
 * Retrieves a paginated list of orders based on provided filter criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IOrderFindByDto} filters - The filter criteria used to query the orders.
 * @returns {Promise<Pagination<IOrderResponse>>} A promise that resolves to a paginated response containing the list of orders based on the provided filters.
 */
export const getOrders = async (
  fetcher: Fetcher,
  filters: IOrderFindByDto,
): Promise<Pagination<IOrderResponse>> => {
  const response = await fetcher.get<Pagination<IOrderResponse>>(
    endpoints.GET_CUSTOMER_ORDERS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrderErr.FETCH_FAILED);
  }

  return response.data;
};
