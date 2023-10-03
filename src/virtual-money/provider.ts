import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { findOneWallet } from './actions';
import { errorFactory } from './errors';

class VirtualMoneyProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public findOneWallet = this.withFetcher(findOneWallet);
}

export { VirtualMoneyProvider };
