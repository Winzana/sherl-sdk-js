import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ConfigErr, errorFactory } from '../errors';
import { IConfig, ISetConfig } from '../types';

export const setConfig = async (
  fetcher: Fetcher,
  request: ISetConfig,
): Promise<IConfig> => {
  const response = await fetcher.post<IConfig>(
    endpoints.POST_SET_CONFIG,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(ConfigErr.FETCH_ERROR);
  }

  return response.data;
};
