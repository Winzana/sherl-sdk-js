import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse, ISignInWithEmailAndPasswordRequest } from '../types';

export const signInWithEmailAndPassword = async (
  fetcher: Fetcher,
  request: ISignInWithEmailAndPasswordRequest,
): Promise<string> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_WITH_CREDENTIALS,
      {
        username: request.email,
        password: request.password,
      },
    );

    switch (response.status) {
      case 200:
        if (!response.data?.access_token) {
          throw errorFactory.create(AuthErr.LOGIN_FAILED);
        }
        return response.data.access_token;
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_FAILED_UNAUTHORIZED);
      default:
        throw errorFactory.create(AuthErr.LOGIN_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(AuthErr.LOGIN_FAILED));
  }
};
