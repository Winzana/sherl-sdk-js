import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWalletHistorical } from '../types';

/**
 * Creates a historical record for a wallet.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} walletId - The unique identifier of the wallet for which the historical record is to be created.
 * @param {IWalletHistorical} data - The historical data to be recorded for the wallet.
 * @returns {Promise<IWalletHistorical>} A promise that resolves to the newly created wallet historical record.
 */
export const createWalletHistorical = async (
  fetcher: Fetcher,
  walletId: string,
  data: IWalletHistorical,
): Promise<IWalletHistorical> => {
  try {
    const response = await fetcher.post<IWalletHistorical>(
      endpoints.CREATE_WALLET_HISTORICAL,
      { walletId },
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(
        VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED);
  }
};
