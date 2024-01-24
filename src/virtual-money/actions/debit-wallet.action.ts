import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.DEBIT_WALLET_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(VirtualMoneyErr.WALLET_NOT_FOUND);

      default:
        throw getSherlError(
          error,
          errorFactory.create(VirtualMoneyErr.DEBIT_WALLET_FAILED),
        );
    }
  }
};
