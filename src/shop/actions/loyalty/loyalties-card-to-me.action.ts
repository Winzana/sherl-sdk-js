import { ISearchResult } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard, ILoyaltyCardFindByDto } from '../../types';

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
