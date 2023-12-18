import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          LoyalityErr.UPDATE_LOYALTY_CARD_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(LoyalityErr.LOYALTY_CARD_NOT_FOUND);
      default:
        throw errorFactory.create(LoyalityErr.UPDATE_LOYALTY_CARD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(LoyalityErr.UPDATE_LOYALTY_CARD_FAILED),
    );
  }
};
