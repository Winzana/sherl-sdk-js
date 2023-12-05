import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ITransferWalletInputDto, IWallet } from '../types';

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
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
  }
};
