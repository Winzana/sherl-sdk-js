import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

export const getOrders = async (
  fetcher: Fetcher,
  filters: IOrderFindByDto,
): Promise<Pagination<IOrderResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IOrderResponse>>(
      endpoints.GET_CUSTOMER_ORDERS,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrderErr.GET_ORDERS_WITH_FILTER_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(OrderErr.GET_ORDERS_WITH_FILTER_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrderErr.GET_ORDERS_WITH_FILTER_FAILED),
    );
  }
};
