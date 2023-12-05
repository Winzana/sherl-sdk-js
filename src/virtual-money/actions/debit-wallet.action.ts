import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ITransferWalletInputDto, IWallet } from '../types';

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

export const debitWallet = async (
  fetcher: Fetcher,
  walletId: string,
  data: ITransferWalletInputDto,
): Promise<IWallet> => {
  try {
    const response = await fetcher.post<IWallet>(
      endpoints.DEBIT_WALLET,
      { walletId },
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.DEBIT_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.DEBIT_WALLET_FAILED);
  }
};
