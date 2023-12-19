import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoint';
import { EtlErr, errorFactory } from '../errors';
import { IConfigModel, IEtlSaveConfigInputDto } from '../types';

/**
 * Save ETL configuration.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IEtlSaveConfigInputDto} config - The ETL configuration to be saved.
 * @returns {Promise<IConfigModel>} A promise that resolves to an IConfigModel with the saved configuration.
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
