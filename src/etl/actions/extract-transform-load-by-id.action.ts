import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IEtlResponse } from '../types';

/**
 * Extract, transform, and load (ETL) data by ID.
 *
 * This function sends a POST request to perform ETL on data identified by its ID.
 * It returns an IEtlResponse containing the result of the ETL process.
 * It handles different HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The ID of the data to be processed.
 * @returns {Promise<IEtlResponse>} A promise that resolves to an IEtlResponse with the ETL result.
 * @throws {EtlErr.EXTRACT_TRANSFORM_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {EtlErr.ETL_CONFIG_NOT_FOUND} Throws an error if the ETL configuration is not found (HTTP 404).
 * @throws {EtlErr.EXTRACT_TRANSFORM_LOAD_FAILED} Throws an error for other failure scenarios.
 */
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
