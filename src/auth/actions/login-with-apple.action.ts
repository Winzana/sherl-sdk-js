import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { IAuthExternalServiceUserInfo, ILoginResponse } from '../types';

/**
 * Log in using Apple authentication.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IAuthExternalServiceUserInfo} appleInfos - Apple authentication information.
 * @returns {Promise<ILoginResponse>} A promise that resolves to an ILoginResponse containing authentication tokens.
 */

export const loginWithApple = async (
  fetcher: Fetcher,
  appleInfos: IAuthExternalServiceUserInfo,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_APPLE,
      appleInfos,
    );

    if (!response.data?.access_token) {
      throw errorFactory.create(AuthErr.LOGIN_APPLE_FAILED);
    }
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 401:
        throw errorFactory.create(AuthErr.LOGIN_APPLE_FAILED_UNAUTHORIZED);
      default:
        throw getSherlError(
          error,
          errorFactory.create(AuthErr.LOGIN_APPLE_FAILED),
        );
    }
  }
};
