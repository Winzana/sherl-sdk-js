import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createStaticPage } from './actions';
import { errorFactory } from './errors';

class CmsProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public createStaticPage = this.withFetcher(createStaticPage);
}

export { CmsProvider };
