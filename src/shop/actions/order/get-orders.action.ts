import { Pagination } from '../../../common/api';
import { IOrderResponse } from '../../types/order/types';
import { OrderApi } from '../../api/order/client';

export const getOrders = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOrderResponse[]>> => {
  const response = await OrderApi.getOrders(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
