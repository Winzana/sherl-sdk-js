import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ConfigErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPublicConfig } from '../types';
import { getSherlError } from '../../common/utils/errors';

export const getPublicConfig = async (
  fetcher: Fetcher,
  code: string,
): Promise<IPublicConfig> => {
  try {
    const response = await fetcher.get<IPublicConfig>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_CONFIG, { code }),
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(ConfigErr.FETCH_FORBIDDEN);
      case 404:
        throw errorFactory.create(ConfigErr.NOT_FOUND);
      default:
        throw getSherlError(error, errorFactory.create(ConfigErr.FETCH_ERROR));
    }
  }
};
