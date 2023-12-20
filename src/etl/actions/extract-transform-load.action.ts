import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IExtractTransformLoadInputDto, IEtlResponse } from '../types';

/**
 * Extract, transform, and load (ETL) data based on the provided configuration.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IExtractTransformLoadInputDto} config - The configuration for the ETL process.
 */
export const extractTransformLoad = async (
  fetcher: Fetcher,
  config: IExtractTransformLoadInputDto,
): Promise<IEtlResponse> => {
  try {
    const response = await fetcher.post<IEtlResponse>(
      endpoints.EXTRACT_TRANSFORM_LOAD,
      config,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(EtlErr.EXTRACT_TRANSFORM_LOAD_FORBIDDEN);
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
