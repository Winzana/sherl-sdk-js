import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IWallet } from '../types';

export const findOneWallet = async (
  fetcher: Fetcher,
  id: string,
  personId: string,
  consumerId: string,
): Promise<IWallet> => {
  try {
    const response = await fetcher.get<IWallet>(
      StringUtils.bindContext(endpoints.FIND_ONE_WALLET_BY, {
        id,
        personId,
        consumerId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.FIND_ONE_WALLET_FAILED_CMS_NOT_FOUND,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
  }
};
