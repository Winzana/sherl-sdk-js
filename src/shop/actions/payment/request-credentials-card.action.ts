import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          PaymentErr.REQUEST_CREDENTIALS_CARD_FORBIDDEN,
        );
      default:
        throw errorFactory.create(PaymentErr.REQUEST_CREDENTIALS_CARD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PaymentErr.REQUEST_CREDENTIALS_CARD_FAILED),
    );
  }
};
