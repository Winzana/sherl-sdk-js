import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { createAccount } from './actions';
import { errorFactory } from './errors';

class AccountProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Creates a new account with the provided data.
   *
   * @param {IAccountCreateInputDto} data - The data for creating a new account.
   * @returns {Promise<IAccount>} A promise that resolves to the newly created account's information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/account#create-account Sherl SDK documentation} for further information
   */
  public createAccount = this.withFetcher(createAccount);
}

export { AccountProvider };
