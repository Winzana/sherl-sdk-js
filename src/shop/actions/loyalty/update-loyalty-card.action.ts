import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard, IShopLoyaltyCardUpdateInputDto } from '../../types';

/**
 * Updates an existing loyalty card with provided details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the loyalty card to be updated.
 * @param {IShopLoyaltyCardUpdateInputDto} updatedCard - The details of the loyalty card to be updated.
 * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the updated loyalty card.
 */
export const updateLoyaltyCard = async (
  fetcher: Fetcher,
  cardId: string,
  updatedCard: IShopLoyaltyCardUpdateInputDto,
): Promise<ILoyaltyCard> => {
  try {
    const response = await fetcher.put<ILoyaltyCard>(
      StringUtils.bindContext(endpoints.UPDATE_LOYALTY_CARD, {
        id: cardId,
      }),
      updatedCard,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(LoyalityErr.UPDATE_LOYALTY_CARD_FORBIDDEN);
      case 404:
        throw errorFactory.create(LoyalityErr.LOYALTY_CARD_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(LoyalityErr.UPDATE_LOYALTY_CARD_FAILED),
        );
    }
  }
};
