import { ErrorFactory } from '../common/errors';

export enum ClaimErr {
  GET_ALL_FAILED = 'claim/get-all',
  GET_CLAIM_BY_ID_FAILED = 'claim/get-by-id',
  CREATE_CLAIM_ERROR = 'claim/create-by-id',
  CREATE_CLAIM_NOT_FOUND_ERROR = 'claim/create-by-id-not-found',
  UPDATE_CLAIM_ERROR = 'claim/update-by-id',
  REFUND_CLAIM_FAILED = 'claim/refund-failed',
  REPLY_CLAIM_FAILED = 'claim/reply-failed',
  FIND_CLAIM_BY_FAILED = 'claim/find-claim-by-failed',
}

export const errors = {
  [ClaimErr.GET_ALL_FAILED]: 'Failed to get all tickets',
  [ClaimErr.GET_CLAIM_BY_ID_FAILED]: 'Failed to get ticket',
  [ClaimErr.CREATE_CLAIM_ERROR]: 'Failed to create ticket',
  [ClaimErr.UPDATE_CLAIM_ERROR]: 'Failed to update ticket',
  [ClaimErr.REFUND_CLAIM_FAILED]: 'Failed to refund ticket',
  [ClaimErr.REPLY_CLAIM_FAILED]: 'Failed to reply ticket',
  [ClaimErr.FIND_CLAIM_BY_FAILED]: 'Failed to find ticket',
};

export const errorFactory = new ErrorFactory<ClaimErr>('Claim', errors);
