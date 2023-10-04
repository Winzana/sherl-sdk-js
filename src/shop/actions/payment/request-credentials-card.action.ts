import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';
import { ICreditCard } from '../../types/payment/entities';

export const requestCredentialsToAddCard = async (
  fetcher: Fetcher,
): Promise<ICreditCard> => {
  try {
    const response = await fetcher.post<ICreditCard>(
      endpoints.REQUEST_CREDENTIALS_ADD_CARD,
      {},
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(PaymentErr.REQUEST_CREDENTIALS_FAILED);
  }
};
