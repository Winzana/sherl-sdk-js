import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { IAuthExternalServiceUserInfo, ILoginResponse } from '../types';

/**
 * Log in using Google authentication.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAuthExternalServiceUserInfo} googleInfos - Google user information used for authentication.
 * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
 */

export const loginWithGoogle = async (
  fetcher: Fetcher,
  googleInfos: IAuthExternalServiceUserInfo,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_GOOGLE,
      googleInfos,
    );

    switch (response.status) {
      case 200:
        if (!response.data?.access_token) {
          throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED);
        }
        return response.data;
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED_UNAUTHORIZED);
      default:
        throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED));
  }
};
