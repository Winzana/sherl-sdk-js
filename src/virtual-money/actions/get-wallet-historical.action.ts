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
  const response = await fetcher
    .get<IWalletHistorical>(
      StringUtils.bindContext(endpoints.GET_WALLET_HISTORICAL, {
        walletId,
        historicalId,
      }),
    )
    .catch((_err) => {
      throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(VirtualMoneyErr.GET_WALLET_HISTORICAL_FAILED);
  }
  return response.data;
};
