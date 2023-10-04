import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { IDebitWalletInputDto, IWallet } from '../types';

export const debitWallet = async (
  fetcher: Fetcher,
  walletId: string,
  data: IDebitWalletInputDto,
) => {
  try {
    const response = await fetcher.post<IWallet>(
      endpoints.DEBIT_WALLET,
      { walletId },
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.DEBIT_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.DEBIT_WALLET_FAILED);
  }
};
