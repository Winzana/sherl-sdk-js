import { ErrorFactory } from '../../../common/errors';

export enum LoyalityErr {
  FETCH_FAILED = 'loyalty/fetch-failed',
  UPDATE_FAILED = 'loyalty/update-failed',
}

export const errors = {
  [LoyalityErr.FETCH_FAILED]: 'Failed to fetch loyalty API',
  [LoyalityErr.UPDATE_FAILED]: 'Failed to update loyalty',
};

export const errorFactory = new ErrorFactory<LoyalityErr>('Loyalty', errors);
