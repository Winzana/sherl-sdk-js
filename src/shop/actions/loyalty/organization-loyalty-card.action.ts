import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard } from '../../types';

/**
 * Retrieves the loyalty card associated with a specific organization.
 *
 * This function sends a GET request to fetch the loyalty card details of an organization identified by its unique ID.
 * The organization ID is used to construct the endpoint for the request. On successful retrieval, it returns the
 * loyalty card's information encapsulated in an ILoyaltyCard object. If the process of fetching the loyalty card
 * encounters any errors, such as a failure to connect to the endpoint or other issues, a specific error indicating
 * the failure of fetching the loyalty card is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose loyalty card is being retrieved.
 * @returns {Promise<ILoyaltyCard>} A promise that resolves to the information of the loyalty card for the specified organization.
 * @throws {LoyalityErr.FETCH_FAILED} Throws an error if the fetching of the loyalty card fails.
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
