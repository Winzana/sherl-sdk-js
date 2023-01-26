import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getPublicConfig, setConfig } from './actions';
import { errorFactory } from './errors';

class ConfigProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  public getPublicConfig = this.withFetcher(getPublicConfig);

  public setConfig = this.withFetcher(setConfig);
}

export { ConfigProvider };
