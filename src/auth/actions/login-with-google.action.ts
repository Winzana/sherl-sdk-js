import { SherlError } from '../../common';
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

    if (!response.data?.access_token) {
      throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED);
    }
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED_UNAUTHORIZED);
      default:
        throw getSherlError(
          error,
          errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED),
        );
    }
  }
};
