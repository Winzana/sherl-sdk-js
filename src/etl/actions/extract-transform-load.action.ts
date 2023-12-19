import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IExtractTransformLoadInputDto, IEtlResponse } from '../types';

/**
 * Extract, transform, and load (ETL) data based on the provided configuration.
 *
 * This function sends a POST request to perform ETL on data according to the provided configuration.
 * It returns an IEtlResponse containing the result of the ETL process.
 * It handles different HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IExtractTransformLoadInputDto} config - The configuration for the ETL process.
 * @returns {Promise<IEtlResponse>} A promise that resolves to an IEtlResponse with the ETL result.
 * @throws {EtlErr.EXTRACT_TRANSFORM_LOAD_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED} Throws an error for other failure scenarios.
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
