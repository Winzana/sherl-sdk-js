import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';

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
