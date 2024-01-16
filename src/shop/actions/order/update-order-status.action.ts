import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse, OrderStatusEnum } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

export const updateOrderStatus = async (
  fetcher: Fetcher,
  id: string,
  status: OrderStatusEnum,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.put<IOrderResponse>(
      StringUtils.bindContext(endpoints.UPDATE_ORDER_STATUS, { id, status }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 400:
        throw errorFactory.create(OrderErr.BAD_REQUEST);
      case 401:
        throw errorFactory.create(OrderErr.NOT_ALLOWED);
      case 403:
        throw errorFactory.create(OrderErr.UPDATE_ORDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORDER_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrderErr.ALREADY_CHANGED);
      default:
        throw errorFactory.create(OrderErr.UPDATE_ORDER_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrderErr.UPDATE_ORDER_FAILED),
    );
  }
};
