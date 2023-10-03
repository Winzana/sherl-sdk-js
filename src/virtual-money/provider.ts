import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { findOneWallet, creditWallet, createWallet } from './actions';
import { errorFactory } from './errors';

class VirtualMoneyProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }
  public findOneWallet = this.withFetcher(findOneWallet);
  public creditWallet = this.withFetcher(creditWallet);
  public createWallet = this.withFetcher(createWallet);
}

export { VirtualMoneyProvider };
