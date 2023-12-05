import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

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

export const getWalletById = async (
  fetcher: Fetcher,
  walletId: string,
): Promise<IWallet> => {
  try {
    const response = await fetcher.get<IWallet>(
      StringUtils.bindContext(endpoints.GET_ONE_WALLET_BY_ID, {
        walletId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
  }
};
