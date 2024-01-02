import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

/**
 * Log in using a code.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} code - The code used for authentication.
 * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
 */
export const loginWithCode = async (
  fetcher: Fetcher,
  code: string,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_WITH_CODE,
      { code },
    );

    switch (response.status) {
      case 200:
        if (!response.data?.access_token) {
          throw errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED);
        }
        return response.data;
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED_UNAUTHORIZED);
      case 404:
        throw errorFactory.create(AuthErr.UNKNOWN_LOGIN_CODE);
      default:
        throw errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(AuthErr.LOGIN_WITH_CODE_FAILED),
    );
  }
};
