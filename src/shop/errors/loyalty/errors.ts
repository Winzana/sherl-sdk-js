import { ErrorFactory } from '../../../common/errors';

export enum LoyalityErr {
  GET_USER_CARD_LOYALTIES_FAILED = 'loyalty/get-user-card-loyalties-failed',
  GET_USER_CARD_LOYALTIES_FAILED_FORBIDDEN = 'loyalty/get-user-card-loyalties-failed-forbidden',
  UPDATE_LOYALTY_CARD_FAILED = 'loyalty/update-loyalty-card-failed',
  UPDATE_LOYALTY_CARD_FAILED_FORBIDDEN = 'loyalty/update-loyalty-card-failed-forbidden',
  GET_ORGANIZATION_LOYALTY_CARD_FAILED = 'loyalty/get-organization-loyalty-card-by-id-failed',
  GET_ORGANIZATION_LOYALTY_CARD_FAILED_FORBIDDEN = 'loyalty/get-organization-loyalty-card-by-id-failed-forbidden',
  ORGANIZATION_ID_NOT_FOUND = 'loyalty/organization-id-not-found',
  LOYALTY_CARD_NOT_FOUND = 'loyalty/loyalty-card-not-found',
}

export const errors = {
  [LoyalityErr.GET_USER_CARD_LOYALTIES_FAILED]:
    'Failed to get user card loyalties',
  [LoyalityErr.GET_USER_CARD_LOYALTIES_FAILED_FORBIDDEN]:
    'Failed to get user card loyalties, forbidden',
  [LoyalityErr.UPDATE_LOYALTY_CARD_FAILED]: 'Failed to update loyalty card',
  [LoyalityErr.UPDATE_LOYALTY_CARD_FAILED_FORBIDDEN]:
    'Failed to update loyalty card, forbidden',
  [LoyalityErr.GET_ORGANIZATION_LOYALTY_CARD_FAILED]:
    'Failed to get organization loyalty card',
  [LoyalityErr.GET_ORGANIZATION_LOYALTY_CARD_FAILED_FORBIDDEN]:
    'Failed to get organization loyalty card, forbidden',
  [LoyalityErr.ORGANIZATION_ID_NOT_FOUND]: 'Organization not found',
  [LoyalityErr.LOYALTY_CARD_NOT_FOUND]: 'Loyalty card not found',
};

export const errorFactory = new ErrorFactory<LoyalityErr>('Loyalty', errors);
