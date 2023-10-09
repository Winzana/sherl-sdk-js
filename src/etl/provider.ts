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

  extractTransformLoad = this.withFetcher(extractTransformLoad);
  extractTransformLoadById = this.withFetcher(extractTransformLoadById);
  saveConfig = this.withFetcher(saveConfig);
}

export { EtlProvider };
