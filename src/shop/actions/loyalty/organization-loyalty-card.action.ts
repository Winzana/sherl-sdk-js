import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard } from '../../types';

/**
 * Retrieves the loyalty card associated with a specific organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose loyalty card is being retrieved.
 * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the loyalty card for the specified organization.
 */
export const getOrganizationLoyaltyCard = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<ILoyaltyCard> => {
  try {
    const response = await fetcher.get<ILoyaltyCard>(
      StringUtils.bindContext(endpoints.LOYALTIES_CARD_ORGANIZATION, {
        id: organizationId,
      }),
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(LoyalityErr.FETCH_FAILED);
  }
};
