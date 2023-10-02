import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard } from '../../types';

export const getLoyaltiesCardToOrganization = async (
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
