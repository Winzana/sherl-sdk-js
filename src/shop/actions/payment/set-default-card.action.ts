import { Fetcher } from '../../../common/api';
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
  } catch (error) {
    throw errorFactory.create(PaymentErr.SET_DEFAULT_CARD_FAILED);
  }
};
