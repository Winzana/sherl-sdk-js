import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, VirtualMoneyErr } from '../errors';
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
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(VirtualMoneyErr.WALLET_NOT_FOUND);
      default:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED,
        );
    }
  }
};
