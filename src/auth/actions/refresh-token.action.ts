import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ApiLoginResponse } from '../types';

export const refreshToken = async (fetcher: Fetcher): Promise<string> => {
  const response = await fetcher.post<ApiLoginResponse>(
    endpoints.REFRESH_TOKEN,
    {},
  );

  if (!response.data.access_token) {
    throw errorFactory.create(AuthErr.AUTH_FAILED);
  }

  return response.data.access_token;
};
