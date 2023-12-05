import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { AccountErr, errorFactory } from '../errors';
import { IAccount, IAccountCreateInputDto } from '../types/entities';

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

export const createAccount = async (
  fetcher: Fetcher,
  data: IAccountCreateInputDto,
): Promise<IAccount> => {
  try {
    const response = await fetcher.post<IAccount>(
      endpoints.CREATE_ACCOUNT,
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(AccountErr.CREATE_ACCOUNT_FAILED);
  }
};
