import { Fetcher, Pagination } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types/order/types';

export const getOrders = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOrderResponse[]>> => {
  const response = await fetcher.get<Pagination<IOrderResponse[]>>(
    endpoints.GET_CUSTOMER_ORDERS,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
