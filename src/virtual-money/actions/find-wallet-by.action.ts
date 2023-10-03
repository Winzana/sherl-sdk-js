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
  const response = await fetcher
    .get<IWallet>(
      StringUtils.bindContext(endpoints.FIND_ONE_WALLET_BY, {
        id,
        personId,
        consumerId,
      }),
    )
    .catch((_err) => {
      throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
    });
  if (response.status !== 200) {
    throw errorFactory.create(VirtualMoneyErr.FIND_ONE_WALLET_FAILED);
  }
  return response.data;
};
