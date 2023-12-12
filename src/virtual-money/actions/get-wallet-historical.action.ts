import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWalletHistorical } from '../types';

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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED_CMS_NOT_FOUND,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
  }
};
