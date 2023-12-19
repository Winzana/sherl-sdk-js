import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { StringUtils } from '../../../common/utils/string';
import { getSherlError } from '../../../common/utils';

export const getOrganizationOrders = async (
  fetcher: Fetcher,
  organizationId: string,
  filters?: IOrderFindByDto,
): Promise<Pagination<IOrderResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IOrderResponse>>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION_ORDERS, {
        id: organizationId,
      }),
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrderErr.GET_ORGANIZATION_ORDERS_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrderErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(OrderErr.GET_ORGANIZATION_ORDERS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrderErr.GET_ORGANIZATION_ORDERS_FAILED),
    );
  }
};
