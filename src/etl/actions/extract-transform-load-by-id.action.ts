import { Fetcher } from '../../common/api';
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

    return response.data;
  } catch (err) {
    throw errorFactory.create(EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED);
  }
};
