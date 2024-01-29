import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse, ISignInWithEmailAndPasswordRequest } from '../types';

/**
 * Sign in a user with their email and password.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ISignInWithEmailAndPasswordRequest} request - An object containing email and password.
 * @returns {Promise<string>} A promise that resolves to an access token if the login is successful.
 */
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

    if (!response.data?.access_token) {
      throw errorFactory.create(AuthErr.LOGIN_FAILED);
    }
    return response.data.access_token;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_FAILED_UNAUTHORIZED);
      default:
        throw getSherlError(error, errorFactory.create(AuthErr.LOGIN_FAILED));
    }
  }
};
