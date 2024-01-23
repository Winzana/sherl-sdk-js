import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { IPerson } from '../../../person';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';

/**
 * Sets a specific payment card as the default card for a person.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the card to be set as default.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information, reflecting the change in the default card.
 */
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
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PaymentErr.SET_DEFAULT_CARD_FORBIDDEN);
      case 404:
        throw errorFactory.create(PaymentErr.CARD_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PaymentErr.SET_DEFAULT_CARD_FAILED),
        );
    }
  }
};
