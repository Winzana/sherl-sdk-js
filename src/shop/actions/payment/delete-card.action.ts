import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

/**
 * Deletes a payment card associated with a person, identified by the card's unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the card to be deleted.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the updated card details.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PaymentErr.DELETE_CARD_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PaymentErr.DELETE_CARD_FAILED),
        );
    }
  }
};
