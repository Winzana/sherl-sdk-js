import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ConfigErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IGetPublicConfigResponse } from '../types';

export const getPublicConfig = async (
  fetcher: Fetcher,
  code: string,
): Promise<IGetPublicConfigResponse> => {
  const response = await fetcher.get<any>(
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
