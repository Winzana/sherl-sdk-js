import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

export const getWalletById = async (
  fetcher: Fetcher,
  walletId: string,
): Promise<IWallet> => {
  const response = await fetcher
    .get<IWallet>(
      StringUtils.bindContext(endpoints.GET_ONE_WALLET_BY_ID, {
        walletId,
      }),
    )
    .catch((_err) => {
      throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
  }
  return response.data;
};
