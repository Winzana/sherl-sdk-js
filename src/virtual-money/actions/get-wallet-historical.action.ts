import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWalletHistorical } from '../types';

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

export const getWalletHistorical = async (
  fetcher: Fetcher,
  walletId: string,
  historicalId: string,
): Promise<IWalletHistorical> => {
  try {
    const response = await fetcher.get<IWalletHistorical>(
      StringUtils.bindContext(endpoints.GET_WALLET_HISTORICAL, {
        walletId,
        historicalId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
  }
};
