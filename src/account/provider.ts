import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createAccount } from './actions';
import { errorFactory } from './errors';

class AccountProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public createAccount = this.withFetcher(createAccount);
}

export { AccountProvider };
