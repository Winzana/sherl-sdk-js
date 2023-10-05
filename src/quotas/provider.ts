import { SherlClient } from '../common';
import { errorFactory } from './errors/errors';
import { AbstractProvider } from '../common/provider';
import { getQuotaFindOneBy } from './actions/get-quota-find-one-by.action';

class QuotaProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  getQuotaFindBy = this.withFetcher(getQuotaFindOneBy);
}

export { QuotaProvider };
