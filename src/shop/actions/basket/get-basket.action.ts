import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrderErr, errorFactory } from '../../errors/order/errors';
import { IOrderResponse } from '../../types';

export const getCurrentBasket = async (
  fetcher: Fetcher,
  customerUri: string,
): Promise<IOrderResponse> => {
  try {
    const response = await fetcher.get<IOrderResponse>(endpoints.GET_BASKET, {
      customerUri,
    });

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrderErr.BASKET_FETCH_FAILED);
  }
};
