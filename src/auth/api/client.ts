import { Fetcher, initializeSherlApi } from '../../common/api';
import { ApiLoginResponse } from '../types';
import { endpoints } from './endpoints';
import { AuthErr, errorFactory } from '../errors';

const axiosInstance = initializeSherlApi();
const fetcher = new Fetcher(errorFactory, axiosInstance);

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
      .catch(_err => {
        throw errorFactory.create(AuthErr.LOGIN_FAILED);
      });
}

export { AuthApi };
