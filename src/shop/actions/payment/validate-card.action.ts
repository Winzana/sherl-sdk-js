import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PaymentErr.VALIDATE_CARD_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw errorFactory.create(PaymentErr.VALIDATE_CARD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PaymentErr.VALIDATE_CARD_FAILED),
    );
  }
};
