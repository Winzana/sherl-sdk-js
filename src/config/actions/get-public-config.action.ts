import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ConfigErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPublicConfig } from '../types';

export const getPublicConfig = async (
  fetcher: Fetcher,
  code: string,
): Promise<IPublicConfig> => {
  const response = await fetcher.get<IPublicConfig>(
    StringUtils.bindContext(endpoints.GET_PUBLIC_CONFIG, { code }),
  );

  if (response.status === 404) {
    throw errorFactory.create(ConfigErr.NOT_FOUND);
  }

  if (response.status !== 200) {
    throw errorFactory.create(ConfigErr.FETCH_ERROR);
  }

  return {
    code,
    value: response.data,
  };
};
