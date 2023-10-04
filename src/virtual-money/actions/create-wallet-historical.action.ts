import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
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
