import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { LoyalityErr, errorFactory } from '../../errors/loyalty/errors';
import { ILoyaltyCard, IShopLoyaltyCardUpdateInputDto } from '../../types';

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
