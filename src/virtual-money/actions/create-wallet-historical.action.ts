import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, VirtualMoneyErr } from '../errors';
import { IWalletHistorical } from '../types';

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
    switch (response.status) {
      case 201:
        return response.data;
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED,
        );
      case 409:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED,
        );
      default:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED,
        );
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_HISTORICAL_FAILED);
  }
};
