import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ICreateWalletInputDto, IWallet } from '../types';

export const createWallet = async (
  fetcher: Fetcher,
  data: ICreateWalletInputDto,
): Promise<IWallet> => {
  try {
    const response = await fetcher.post<IWallet>(endpoints.CREATE_WALLET, data);

    switch (response.status) {
      case 201:
        return response.data;
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.CREATE_WALLET_FAILED_CMS_NOT_EXIST,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREATE_WALLET_FAILED);
  }
};
