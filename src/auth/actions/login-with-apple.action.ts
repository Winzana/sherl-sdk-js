import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { IAuthExternalServiceUserInfo, ILoginResponse } from '../types';

export const loginWithApple = async (
  fetcher: Fetcher,
  appleInfos: IAuthExternalServiceUserInfo,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.LOGIN_APPLE,
      appleInfos,
    );

    if (!response.data.access_token) {
      throw errorFactory.create(AuthErr.LOGIN_APPLE_FAILED);
    }

    return response.data;
  } catch (err) {
    throw errorFactory.create(AuthErr.LOGIN_APPLE_FAILED);
  }
};
