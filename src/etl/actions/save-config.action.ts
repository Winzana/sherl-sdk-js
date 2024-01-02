import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(EtlErr.SAVE_CONFIG_FORBIDDEN);
      default:
        throw errorFactory.create(EtlErr.SAVE_CONFIG_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(EtlErr.SAVE_CONFIG_FAILED));
  }
};
