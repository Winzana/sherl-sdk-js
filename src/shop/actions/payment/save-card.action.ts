import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

export const saveCard = async (
  fetcher: Fetcher,
  cardId: string,
  token: string,
): Promise<IPerson> => {
  try {
    const response = await fetcher.post<IPerson>(endpoints.SAVE_CARD, {
      id: cardId,
      token,
    });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PaymentErr.SAVE_CARD_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw errorFactory.create(PaymentErr.SAVE_CARD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PaymentErr.SAVE_CARD_FAILED),
    );
  }
};
