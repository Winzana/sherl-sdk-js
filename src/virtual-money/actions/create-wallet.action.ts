import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ICreateWalletInputDto, IWallet } from '../types';

export const createWallet = async (
  fetcher: Fetcher,
  data: ICreateWalletInputDto,
) => {
  try {
    const response = await fetcher.post<IWallet>(endpoints.CREATE_WALLET, data);
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
  }
};
