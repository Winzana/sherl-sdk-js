import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

/**
 * Saves a payment card for a person, identified by the card's ID and a provided token.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the card to be saved.
 * @param {string} token - The token associated with the card, used for validation and saving the card.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the updated card details.
 */
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PaymentErr.SAVE_CARD_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PaymentErr.SAVE_CARD_FAILED),
        );
    }
  }
};
