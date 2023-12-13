import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import {
  findOneWallet,
  creditWallet,
  createWallet,
  debitWallet,
  createWalletHistorical,
  getWalletById,
  getWalletHistorical,
} from './actions';
import { errorFactory } from './errors';

class VirtualMoneyProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Retrieves a specific wallet based on the provided identifiers.
   *
   * This function sends a GET request to find a wallet using a combination of identifiers: the wallet's ID,
   * the associated person's ID, and the consumer's ID. These identifiers are used to construct the endpoint
   * for the GET request. If the wallet is found successfully, the function returns the wallet's information.
   * In case of any errors, such as a non-200 status response or other issues, a specific error indicating the
   * failure of finding the wallet is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} id - The unique identifier of the wallet.
   * @param {string} personId - The identifier of the person associated with the wallet.
   * @param {string} consumerId - The identifier of the consumer associated with the wallet.
   * @returns {Promise<IWallet>} A promise that resolves to the information of the specific wallet.
   * @throws {VirtualMoneyErr.FIND_ONE_WALLET_FAILED} Throws an error if the operation to find the wallet fails.
   */
  public findOneWallet = this.withFetcher(findOneWallet);

  /**
   * Credits a specified wallet with a certain amount or transaction.
   *
   * This function sends a POST request to add credit to a wallet identified by its walletId.
   * The details of the credit transaction, such as amount and related information, are provided
   * in the ITransferWalletInputDto object. On successful credit operation, it returns the updated wallet's information.
   * If the credit process encounters any errors, such as a non-201 status response or connectivity issues,
   * a specific error indicating the failure of the credit operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} walletId - The unique identifier of the wallet to be credited.
   * @param {ITransferWalletInputDto} data - The data for the credit transaction.
   * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the credit operation.
   * @throws {VirtualMoneyErr.CREDIT_WALLET_FAILED} Throws an error if the credit operation fails.
   */
  public creditWallet = this.withFetcher(creditWallet);

  /**
   * Debits a specified amount or transaction from a wallet.
   *
   * This function sends a POST request to debit a specified amount from a wallet identified by its walletId.
   * The details of the debit transaction, such as the amount and related information, are provided in the
   * ITransferWalletInputDto object. On successful debit operation, it returns the updated wallet's information.
   * If the debit process encounters any errors, such as a non-201 status response or connectivity issues,
   * a specific error indicating the failure of the debit operation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} walletId - The unique identifier of the wallet to be debited.
   * @param {ITransferWalletInputDto} data - The data for the debit transaction.
   * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the debit operation.
   * @throws {VirtualMoneyErr.DEBIT_WALLET_FAILED} Throws an error if the debit operation fails.
   */
  public debitWallet = this.withFetcher(debitWallet);

  /**
   * Creates a new wallet using the provided data.
   *
   * This function sends a POST request to create a new wallet. The wallet creation data is
   * provided in the ICreateWalletInputDto object. On successful creation, it returns the newly created
   * wallet's information. If the creation process encounters any errors, such as a non-201 status response
   * or connectivity issues, a specific error indicating the failure of the wallet creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ICreateWalletInputDto} data - The data for creating a new wallet.
   * @returns {Promise<IWallet>} A promise that resolves to the newly created wallet's information.
   * @throws {VirtualMoneyErr.CREATE_WALLET_FAILED} Throws an error if the wallet creation fails.
   */
  public createWallet = this.withFetcher(createWallet);

  /**
   * Creates a historical record for a wallet.
   *
   * This function sends a POST request to create a historical entry for a specified wallet. It uses the walletId to identify
   * the wallet and the IWalletHistorical object to provide the historical data. On successful creation, it returns the newly
   * created wallet historical record. If the creation process encounters any errors, such as a response status other than 201
   * or connectivity issues, a specific error indicating the failure of the wallet historical creation is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} walletId - The unique identifier of the wallet for which the historical record is to be created.
   * @param {IWalletHistorical} data - The historical data to be recorded for the wallet.
   * @returns {Promise<IWalletHistorical>} A promise that resolves to the newly created wallet historical record.
   * @throws {VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED} Throws an error if the creation of the wallet historical record fails.
   */
  public createWalcreateWalletHistoricalletHistorical = this.withFetcher(
    createWalletHistorical,
  );

  /**
   * Retrieves a specific historical record of a wallet using wallet and historical IDs.
   *
   * This function sends a GET request to find a particular historical entry of a wallet. It uses the wallet's ID and the
   * historical entry's ID to construct the endpoint for the request. If the historical entry is successfully found, the function
   * returns the detailed information of that historical record. In case of any errors, such as a non-200 status response or other
   * issues, a specific error indicating the failure to retrieve the wallet historical record is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} walletId - The unique identifier of the wallet.
   * @param {string} historicalId - The unique identifier of the historical record to be retrieved.
   * @returns {Promise<IWalletHistorical>} A promise that resolves to the detailed information of the specified wallet historical record.
   * @throws {VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED} Throws an error if the operation to retrieve the wallet historical record fails.
   */
  public getWalletHistorical = this.withFetcher(getWalletHistorical);

  /**
   * Retrieves a wallet's information based on its unique ID.
   *
   * This function sends a GET request to find a wallet using its unique wallet ID. The ID is used
   * to construct the endpoint for the GET request. If the wallet is found successfully, the function
   * returns the detailed information of the wallet. In case of any errors, such as a non-200 status
   * response or other issues, a specific error indicating the failure to find the wallet is thrown.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {string} walletId - The unique identifier of the wallet to be retrieved.
   * @returns {Promise<IWallet>} A promise that resolves to the detailed information of the specified wallet.
   * @throws {VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED} Throws an error if the operation to retrieve the wallet fails.
   */
  public getWalletById = this.withFetcher(getWalletById);
}

export { VirtualMoneyProvider };
