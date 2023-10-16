import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { IAuthExternalServiceUserInfo, ILoginResponse } from '../types';

export const loginWithFacebook = async (
  fetcher: Fetcher,
  facebookInfos: IAuthExternalServiceUserInfo,
): Promise<ILoginResponse> => {
  const response = await fetcher.post<ILoginResponse>(
    endpoints.LOGIN_FACEBOOK,
    facebookInfos,
  );

  if (!response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_FACEBOOK_FAILED);
  }

  return response.data;
};
