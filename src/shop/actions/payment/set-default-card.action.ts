import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

export const setDefaultCard = async (
  fetcher: Fetcher,
  cardId: string,
): Promise<IPerson> => {
  try {
    const response = await fetcher.post<IPerson>(
      StringUtils.bindContext(endpoints.SET_DEFAULT_CARD, {
        id: cardId,
      }),
      {},
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(PaymentErr.SET_DEFAULT_CARD_FAILED);
  }
};
