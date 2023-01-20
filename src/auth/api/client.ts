import { Fetcher } from '../../common/api';
import { ApiLoginResponse } from '../types';
import { endpoints } from './endpoints';
import { AuthErr, errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class AuthApi {
  public static postRequestLoginCredential = (
    username: string,
    password: string,
  ) =>
    fetcher
      .post<ApiLoginResponse>(endpoints.LOGIN_WITH_CREDENTIALS, {
        username,
        password,
      })
      .catch((_err) => {
        throw errorFactory.create(AuthErr.LOGIN_FAILED);
      });

  public static getLogout = () =>
    fetcher.get<ApiLoginResponse>(endpoints.LOGOUT);

  public static postRefreshToken = () =>
    fetcher.post<ApiLoginResponse>(endpoints.REFRESH_TOKEN, {});
}

export { AuthApi };
