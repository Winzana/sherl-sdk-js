import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { getSherlError } from '../../../common/utils/errors';

export const getOrder = async (
  fetcher: Fetcher,
  id: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.get<IOrderResponse>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrderErr.GET_ORDER_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrderErr.ORDER_NOT_FOUND);
      default:
        throw errorFactory.create(OrderErr.GET_ORDER_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(OrderErr.GET_ORDER_FAILED));
  }
};
