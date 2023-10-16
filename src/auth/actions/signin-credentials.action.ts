import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse, ISignInWithEmailAndPasswordRequest } from '../types';

export const signInWithEmailAndPassword = async (
  fetcher: Fetcher,
  request: ISignInWithEmailAndPasswordRequest,
): Promise<string> => {
  const response = await fetcher
    .post<ILoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
      username: request.email,
      password: request.password,
    })
    .catch((_err) => {
      throw errorFactory.create(AuthErr.LOGIN_FAILED);
    });

  if (!response.data || !response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FAILED);
  }
  return response.data.access_token;
};
