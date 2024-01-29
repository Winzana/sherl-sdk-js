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
   * @param {string} id - The unique identifier of the wallet.
   * @param {string} personId - The identifier of the person associated with the wallet.
   * @param {string} consumerId - The identifier of the consumer associated with the wallet.
   * @returns {Promise<IWallet>} A promise that resolves to the information of the specific wallet.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#find-wallet-by Sherl SDK documentation} for further information
   */
  public findOneWallet = this.withFetcher(findOneWallet);

  /**
   * Credits a specified wallet with a certain amount or transaction.
   *
   * @param {string} walletId - The unique identifier of the wallet to be credited.
   * @param {ITransferWalletInputDto} data - The data for the credit transaction.
   * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the credit operation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#credit-wallet Sherl SDK documentation} for further information
   */
  public creditWallet = this.withFetcher(creditWallet);

  /**
   * Debits a specified amount or transaction from a wallet.
   *
   * @param {string} walletId - The unique identifier of the wallet to be debited.
   * @param {ITransferWalletInputDto} data - The data for the debit transaction.
   * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the debit operation.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#debit-wallet Sherl SDK documentation} for further information
   */
  public debitWallet = this.withFetcher(debitWallet);

  /**
   * Creates a new wallet using the provided data.
   *
   * @param {ICreateWalletInputDto} data - The data for creating a new wallet.
   * @returns {Promise<IWallet>} A promise that resolves to the newly created wallet's information.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#create-wallet Sherl SDK documentation} for further information
   */
  public createWallet = this.withFetcher(createWallet);

  /**
   * Creates a historical record for a wallet.
   *
   * @param {string} walletId - The unique identifier of the wallet for which the historical record is to be created.
   * @param {IWalletHistorical} data - The historical data to be recorded for the wallet.
   * @returns {Promise<IWalletHistorical>} A promise that resolves to the newly created wallet historical record.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#create-wallet-historical Sherl SDK documentation} for further information
   */
  public createWalcreateWalletHistoricalletHistorical = this.withFetcher(
    createWalletHistorical,
  );

  /**
   * Retrieves a specific historical record of a wallet using wallet and historical IDs.
   *
   * @param {string} walletId - The unique identifier of the wallet.
   * @param {string} historicalId - The unique identifier of the historical record to be retrieved.
   * @returns {Promise<IWalletHistorical>} A promise that resolves to the detailed information of the specified wallet historical record.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#get-wallet-historical Sherl SDK documentation} for further information
   */
  public getWalletHistorical = this.withFetcher(getWalletHistorical);

  /**
   * Retrieves a wallet's information based on its unique ID.
   *
   * @param {string} walletId - The unique identifier of the wallet to be retrieved.
   * @returns {Promise<IWallet>} A promise that resolves to the detailed information of the specified wallet.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/virtual-money#get-wallet-by-id Sherl SDK documentation} for further information
   */
  public getWalletById = this.withFetcher(getWalletById);
}

export { VirtualMoneyProvider };
