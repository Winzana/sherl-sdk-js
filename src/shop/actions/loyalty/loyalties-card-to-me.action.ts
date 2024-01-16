import { ISearchResult } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          LoyalityErr.GET_USER_CARD_LOYALTIES_FORBIDDEN,
        );
      default:
        throw errorFactory.create(LoyalityErr.GET_USER_CARD_LOYALTIES_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(LoyalityErr.GET_USER_CARD_LOYALTIES_FAILED),
    );
  }
};
