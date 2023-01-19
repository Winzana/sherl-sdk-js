import { ApiResponse } from '../../common/api';
import { IPersonMeResponse } from '../types';
import { PersonApi } from '../api/client';

export const getMe = async (): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await PersonApi.getMe();
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
