import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IOrderResponse } from '../../types';
import { ApiResponse } from '../../../common/types/response';

export const getAutomationSecondary = async (
  fetcher: Fetcher,
  id: string,
): Promise<IOrderResponse> => {
  let response: ApiResponse<IOrderResponse> | null = null;

  try {
    response = await fetcher.get<IOrderResponse>(
      StringUtils.bindContext(endpoints.GET_ORDER_AUTOMATION_SECONDARY, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
