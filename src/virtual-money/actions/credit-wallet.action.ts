import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ITransferWalletInputDto, IWallet } from '../types';

export const creditWallet = async (
  fetcher: Fetcher,
  walletId: string,
  data: ITransferWalletInputDto,
): Promise<IWallet> => {
  try {
    const response = await fetcher.post<IWallet>(
      endpoints.CREDIT_WALLET,
      { walletId },
      data,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 404:
        throw errorFactory.create(
          VirtualMoneyErr.CREDIT_WALLET_FAILED_CMS_NOT_EXIST,
        );
      default:
        throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
  }
};
