import { Fetcher } from '../../common/api';
import { SherlError } from '../../common/errors';
import { getSherlError } from '../../common/utils/errors';
import { endpoints } from '../api/endpoints';
import { ConfigErr, errorFactory } from '../errors';
import { IConfig, ISetConfig } from '../types';

export const setConfig = async (
  fetcher: Fetcher,
  request: ISetConfig,
): Promise<IConfig> => {
  try {
    const response = await fetcher.post<IConfig>(
      endpoints.POST_SET_CONFIG,
      request,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ConfigErr.SET_CONFIG_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ConfigErr.SET_CONFIG_ERROR),
        );
    }
  }
};
