import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ApiLoginResponse, SignInWithGoogleRequest } from '../types';

export const signInWithGoogle = async (
  fetcher: Fetcher,
  request: SignInWithGoogleRequest,
): Promise<string> => {
  const response = await fetcher
    .post<ApiLoginResponse>(endpoints.LOGIN_WITH_GOOGLE, {
      ...request,
    })
    .catch((_err) => {
      throw errorFactory.create(AuthErr.LOGIN_FAILED);
    });

  if (!response.data || !response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FAILED);
  }

  return response.data.access_token;
};
