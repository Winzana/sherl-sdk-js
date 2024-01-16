import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { PaymentErr, errorFactory } from '../../errors/payment/errors';
import { ICreditCard } from '../../types/payment/entities';

/**
 * Validates a payment card based on its unique identifier.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the card to be validated.
 * @returns {Promise<ICreditCard>} A promise that resolves to the credit card information post-validation.
 */
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
