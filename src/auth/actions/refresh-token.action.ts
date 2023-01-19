import { AuthApi } from '../api/client';
import { AuthErr, errorFactory } from '../errors';

export const refreshToken = async (): Promise<string> => {
  const response = await AuthApi.postRefreshToken();

  if (!response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FAILED);
  }

  return response.data.access_token;
};
