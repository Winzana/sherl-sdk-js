import { Fetcher } from '../../common/api';
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

    return response.data;
  } catch (err) {
    throw errorFactory.create(EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED);
  }
};
