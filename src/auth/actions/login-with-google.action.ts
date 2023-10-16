import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { IAuthExternalServiceUserInfo, ILoginResponse } from '../types';

export const loginWithGoogle = async (
  fetcher: Fetcher,
  googleInfos: IAuthExternalServiceUserInfo,
): Promise<ILoginResponse> => {
  const response = await fetcher.post<ILoginResponse>(
    endpoints.LOGIN_GOOGLE,
    googleInfos,
  );

  if (!response.data.access_token) {
    throw errorFactory.create(AuthErr.LOGIN_GOOGLE_FAILED);
  }

  return response.data;
};
