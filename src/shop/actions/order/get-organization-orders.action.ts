import { ApiResponse, Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types/order/types';

export const getOrganizationOrders = async (
  fetcher: Fetcher,
  id: string,
): Promise<IOrderResponse[]> => {
  let response: ApiResponse<IOrderResponse[]> | null = null;

  try {
    response = await fetcher.get<IOrderResponse[]>(
      StringUtils.bindContext(endpoints.GET_ORDER, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
