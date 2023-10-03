import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { VirtualMoneyErr, errorFactory } from '../errors';
import { ICreditWalletInputDto } from '../types';

export const creditWallet = async (
  fetcher: Fetcher,
  data: ICreditWalletInputDto,
) => {
  try {
    const response = await fetcher.post<ICreditWalletInputDto>(
      endpoints.CREDIT_WALLET,
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(VirtualMoneyErr.CREDIT_WALLET_FAILED);
  }
};
