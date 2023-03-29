import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IConfigResponse } from '../types';
import { ApiResponse } from '../../common';

export const getConfigs = async (
  fetcher: Fetcher,
): Promise<IConfigResponse[]> => {
  let response: ApiResponse<IConfigResponse[]> | null = null;

  try {
    response = await fetcher.get<IConfigResponse[]>(endpoints.GET_CONFIG);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
