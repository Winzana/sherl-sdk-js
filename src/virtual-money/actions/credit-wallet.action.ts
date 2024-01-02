import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ITransferWalletInputDto, IWallet } from '../types';

/**
 * Credits a specified wallet with a certain amount or transaction.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} walletId - The unique identifier of the wallet to be credited.
 * @param {ITransferWalletInputDto} data - The data for the credit transaction.
 * @returns {Promise<IWallet>} A promise that resolves to the updated wallet's information after the credit operation.
 */
export const creditWallet = async (
  fetcher: Fetcher,
  walletId: string,
  data: ITransferWalletInputDto,
): Promise<IWallet> => {
  try {
    const response = await fetcher.post<IWallet>(
      endpoints.CREDIT_WALLET,
      { walletId },
      data,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.CREDIT_WALLET_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(VirtualMoneyErr.WALLET_NOT_FOUND);
      default:
        throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED),
    );
  }
};
