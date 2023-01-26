import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPersonMeResponse } from '../types';

export const getMe = async (fetcher: Fetcher): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await fetcher.get<IPersonMeResponse>(endpoints.GET_ME);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
