import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IEtlResponse } from '../types';

export const extractTransformLoadById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IEtlResponse> => {
  try {
    const response = await fetcher.post<IEtlResponse>(
      StringUtils.bindContext(endpoints.EXTRACT_TRANSFORM_LOAD_ID, {
        id,
      }),
      {},
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(EtlErr.EXTRACT_TRANSFORM_FORBIDDEN);
      case 404:
        throw errorFactory.create(EtlErr.ETL_NOT_FOUND);
      default:
        throw errorFactory.create(EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED),
    );
  }
};
