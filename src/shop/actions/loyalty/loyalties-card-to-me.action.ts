import { ISearchResult } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard, ILoyaltyCardFindByDto } from '../../types';

/**
 * Retrieves loyalty cards associated with the current user based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ILoyaltyCardFindByDto} [filters] - Optional filters to apply when fetching loyalty cards for the current user.
 * @returns {Promise<ISearchResult<ILoyaltyCard>>} A promise that resolves to a search result containing the list of loyalty cards associated with the current user.
 */
export const getLoyaltiesCardToMe = async (
  fetcher: Fetcher,
  filters?: ILoyaltyCardFindByDto,
): Promise<ISearchResult<ILoyaltyCard>> => {
  try {
    const response = await fetcher.get<ISearchResult<ILoyaltyCard>>(
      endpoints.CURRENT_USER_LOYALTIES_CARDS,
      filters,
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(LoyalityErr.FETCH_FAILED);
  }
};
