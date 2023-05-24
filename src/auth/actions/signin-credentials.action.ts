import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ApiLoginResponse } from '../types';

export interface SignInWithEmailAndPasswordRequest {
  email: string;
  password: string;
}

export const signInWithEmailAndPassword = async (
  fetcher: Fetcher,
  request: SignInWithEmailAndPasswordRequest,
): Promise<string> => {
  const response = await fetcher
    .post<ApiLoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
      username: request.email,
      password: request.password,
    })
    .catch((_err) => {
      throw errorFactory.create(AuthErr.LOGIN_FAILED);
    });

  if (!response.data || !response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FAILED);
  }
  console.log(response.headers);
  return response.data.access_token;
};
