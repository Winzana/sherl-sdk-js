import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ITransferWalletInputDto, IWallet } from '../types';

/**
 * Debits a specified amount or transaction from a wallet.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} walletId - The unique identifier of the wallet to be debited.
 * @param {ITransferWalletInputDto} data - The data for the debit transaction.
 * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the debit operation.
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
