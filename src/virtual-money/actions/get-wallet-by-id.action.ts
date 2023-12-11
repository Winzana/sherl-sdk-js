import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

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

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_NOT_EXIST,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
  }
};
