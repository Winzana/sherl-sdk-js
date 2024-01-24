import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWalletHistorical } from '../types';

/**
 * Retrieves a specific historical record of a wallet using wallet and historical IDs.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} walletId - The unique identifier of the wallet.
 * @param {string} historicalId - The unique identifier of the historical record to be retrieved.
 * @returns {Promise<IWalletHistorical>} A promise that resolves to the detailed information of the specified wallet historical record.
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(VirtualMoneyErr.WALLET_HISTORICAL_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED),
        );
    }
  }
};
