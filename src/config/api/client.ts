import { Fetcher } from '../../common/api';
import { ApiConfigResponse } from '../types';
import { endpoints } from './endpoints';
import { ConfigErr, errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class ConfigApi {
  /**
   * Get public config
   *
   * @static
   * @memberof ConfigApi
   */
  public static getPublicConfig = (code: string) =>
    fetcher.get<ApiConfigResponse>(`${endpoints.GET_PUBLIC_CONFIG}/${code}`);

  /**
   * POST request set config value
   *
   * @static
   * @memberof ConfigApi
   */
  public static postRequestSetConfigValue = (
    code: string,
    isPublic: boolean,
    value: boolean,
    appliedTo: string,
  ) =>
    fetcher
      .post<ApiConfigResponse>(endpoints.POST_SET_CONFIG_VALUE, {
        code,
        isPublic,
        value,
        appliedTo,
      })
      .catch(_err => {
        throw errorFactory.create(ConfigErr.SET_CONFIG_VALUE_FAILED);
      });
}

export { ConfigApi };
