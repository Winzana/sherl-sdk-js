import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IConfigModel, IEtlSaveConfigInputDto } from '../types';

/**
 * Save ETL configuration.
 *
 * This function sends a POST request to save an ETL configuration based on the provided input.
 * It returns an IConfigModel containing the saved configuration.
 * It handles different HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IEtlSaveConfigInputDto} config - The ETL configuration to be saved.
 * @returns {Promise<IConfigModel>} A promise that resolves to an IConfigModel with the saved configuration.
 * @throws {EtlErr.SAVE_CONFIG_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {EtlErr.SAVE_CONFIG_FAILED} Throws an error for other failure scenarios.
 */
export const saveConfig = async (
  fetcher: Fetcher,
  config: IEtlSaveConfigInputDto,
): Promise<IConfigModel> => {
  try {
    const response = await fetcher.post<IConfigModel>(
      endpoints.SAVE_CONFIG,
      config,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(EtlErr.SAVE_CONFIG_FAILED);
  }
};
