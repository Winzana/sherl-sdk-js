import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  extractTransformLoad,
  extractTransformLoadById,
  saveConfig,
} from './actions';
import { errorFactory } from './errors';

class EtlProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Extract, transform, and load (ETL) data by ID.
   *
   * @param {string} id - The ID of the data to be processed.
   * @returns {Promise<IEtlResponse>} A promise that resolves to an IEtlResponse with the ETL result.
   *  * @see {@link https://winzana.github.io/sherl-sdk-js/docs/ETL#extract-transform-load Sherl SDK documentation} for further information
   */
  extractTransformLoad = this.withFetcher(extractTransformLoad);

  /**
   * Extract, transform, and load (ETL) data based on the provided configuration.
   *
   * @param {IExtractTransformLoadInputDto} config - The configuration for the ETL process.
   *  * @see {@link https://winzana.github.io/sherl-sdk-js/docs/ETL#extract-transform-load-by-config-id Sherl SDK documentation} for further information
   */
  extractTransformLoadById = this.withFetcher(extractTransformLoadById);

  /**
   * Save ETL configuration.
   *
   * @param {IEtlSaveConfigInputDto} config - The ETL configuration to be saved.
   * @returns {Promise<IConfigModel>} A promise that resolves to an IConfigModel with the saved configuration.
   *  * @see {@link https://winzana.github.io/sherl-sdk-js/docs/ETL#save-config SDK documentation} for further information
   */
  saveConfig = this.withFetcher(saveConfig);
}

export { EtlProvider };
