import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { OrderErr, errorFactory } from '../../errors/order/errors';

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
