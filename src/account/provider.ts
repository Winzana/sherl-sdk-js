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
   * This function sends a POST request to create a new account using the data provided in the IAccountCreateInputDto object.
   * On successful account creation, it returns the newly created account's information. If the creation process encounters
   * any errors, such as a non-201 status response or connectivity issues, a specific error indicating the failure of the account
   * creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {IAccountCreateInputDto} data - The data for creating a new account.
   * @returns {Promise<IAccount>} A promise that resolves to the newly created account's information.
   * @throws {AccountErr.CREATE_ACCOUNT_FAILED} Throws an error if the account creation fails.
   */
  public createAccount = this.withFetcher(createAccount);
}

export { AccountProvider };
