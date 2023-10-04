import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IOrderFindByDto, IOrderResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { StringUtils } from '../../../common/utils/string';

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
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.FETCH_FAILED);
  }
};
