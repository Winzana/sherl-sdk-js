import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard, IShopLoyaltyCardUpdateInputDto } from '../../types';

/**
 * Updates an existing loyalty card with provided details.
 *
 * This function sends a PUT request to update a specific loyalty card identified by its unique ID. The updated loyalty
 * card details are provided in the IShopLoyaltyCardUpdateInputDto object. On successful update, it returns the updated
 * loyalty card's information encapsulated in an ILoyaltyCard object. If the update process encounters any errors, such
 * as a failure to connect to the endpoint or other issues, a specific error indicating the failure of the loyalty card
 * update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} cardId - The unique identifier of the loyalty card to be updated.
 * @param {IShopLoyaltyCardUpdateInputDto} updatedCard - The details of the loyalty card to be updated.
 * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the updated loyalty card.
 * @throws {LoyalityErr.UPDATE_FAILED} Throws an error if the loyalty card update fails.
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
  } catch (error) {
    throw errorFactory.create(LoyalityErr.UPDATE_FAILED);
  }
};
