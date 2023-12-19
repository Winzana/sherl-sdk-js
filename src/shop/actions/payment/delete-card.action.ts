import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

export const deleteCard = async (
  fetcher: Fetcher,
  cardId: string,
): Promise<IPerson> => {
  try {
    const response = await fetcher.delete<IPerson>(
      StringUtils.bindContext(endpoints.DELETE_CARD, {
        id: cardId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PaymentErr.DELETE_CARD_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw errorFactory.create(PaymentErr.DELETE_CARD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PaymentErr.DELETE_CARD_FAILED),
    );
  }
};
