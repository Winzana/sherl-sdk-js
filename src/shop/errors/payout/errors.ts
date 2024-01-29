import { ErrorFactory } from '../../../common/errors';

export enum PayoutErr {
  GENERATE_PAYOUT_FAILED = 'payout/generate-payout-failed',
  GENERATE_PAYOUT_FORBIDDEN = 'payout/generate-payout-forbidden',
  SUBMIT_PAYOUT_FAILED = 'payout/submit-payout-failed',
  SUBMIT_PAYOUT_FORBIDDEN = 'payout/submit-payout-forbidden',
}

export const errors = {
  [PayoutErr.GENERATE_PAYOUT_FAILED]: 'Failed to generate payout',
  [PayoutErr.GENERATE_PAYOUT_FORBIDDEN]: 'Failed to generate payout, forbidden',
  [PayoutErr.SUBMIT_PAYOUT_FAILED]: 'Failed to submit payout',
  [PayoutErr.SUBMIT_PAYOUT_FORBIDDEN]: 'Failed to submit payout, forbidden',
};

export const errorFactory = new ErrorFactory<PayoutErr>('Shop/Payout', errors);
