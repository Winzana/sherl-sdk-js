import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED_CMS_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(VirtualMoneyErr.VIRTUAL_MONEY_NOT_FOUND);
      default:
        throw errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(VirtualMoneyErr.GET_ONE_WALLET_BY_ID_FAILED),
    );
  }
};
