import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (error) {
    throw errorFactory.create(PaymentErr.SAVE_CARD_FAILED);
  }
};
