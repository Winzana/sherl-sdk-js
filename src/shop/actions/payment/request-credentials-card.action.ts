import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';
import { ICreditCard } from '../../types/payment/entities';

/**
 * Requests the necessary credentials to add a new credit card.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<ICreditCard>} A promise that resolves to the credit card credentials required for adding a new card.
 */
export const requestCredentialsToAddCard = async (
  fetcher: Fetcher,
): Promise<ICreditCard> => {
  try {
    const response = await fetcher.post<ICreditCard>(
      endpoints.REQUEST_CREDENTIALS_ADD_CARD,
      {},
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          PaymentErr.REQUEST_CREDENTIALS_CARD_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(PaymentErr.REQUEST_CREDENTIALS_CARD_FAILED),
        );
    }
  }
};
