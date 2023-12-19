import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IEtlResponse } from '../types';

/**
 * Extract, transform, and load (ETL) data by ID.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The ID of the data to be processed.
 * @returns {Promise<IEtlResponse>} A promise that resolves to an IEtlResponse with the ETL result.
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
