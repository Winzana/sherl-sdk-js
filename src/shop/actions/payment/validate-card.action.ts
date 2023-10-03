import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';
import { ICreditCard } from '../../types/payment/entities';

export const validateCard = async (
  fetcher: Fetcher,
  cardId: string,
): Promise<ICreditCard> => {
  try {
    const response = await fetcher.get<ICreditCard>(
      StringUtils.bindContext(endpoints.VALIDATE_CARD, {
        id: cardId,
      }),
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(PaymentErr.VALIDATE_CARD_FAILED);
  }
};
