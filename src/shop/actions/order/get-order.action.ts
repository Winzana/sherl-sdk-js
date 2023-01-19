import { ApiResponse } from '../../../common/api';
import { IOrderResponse } from '../../types/order/types';
import { OrderApi } from '../../api/order/client';

export const getOrder = async (id: string): Promise<IOrderResponse> => {
  let response: ApiResponse<IOrderResponse> | null = null;

  try {
    response = await OrderApi.getOrder(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
