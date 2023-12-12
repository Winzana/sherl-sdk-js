import { ErrorFactory } from '../common/errors';

export enum ClaimErr {
  GET_ALL_FAILED = 'claim/get-all',
  GET_ALL_NOT_FOUND_ERROR = 'claim/get-all-not-found',
  GET_CLAIM_BY_ID_NOT_FOUND_ERROR = 'claim/get-by-id-not-found',
  GET_CLAIM_BY_ID_FAILED = 'claim/get-by-id',
  CLAIM_NOT_FOUND_ERROR = 'claim/claim-not-found',
  CREATE_CLAIM_ERROR = 'claim/create-by-id',
  CREATE_CLAIM_NOT_FOUND_ERROR = 'claim/create-by-id-not-found',
  UPDATE_CLAIM_ERROR = 'claim/update-by-id',
  UPDATE_CLAIM_NOT_FOUND_ERROR = 'claim/update-by-id-not-found',
  REFUND_CLAIM_FAILED = 'claim/refund-failed',
  REFUND_CLAIM_NOT_FOUND_ERROR = 'claim/refund-by-id-not-found',
  REPLY_CLAIM_FAILED = 'claim/reply-failed',
  REPLY_CLAIM_NOT_FOUND_ERROR = 'claim/reply-by-id-not-found',
  FIND_CLAIM_BY_FAILED = 'claim/find-claim-by-failed',
  FIND_CLAIM_BY_NOT_FOUND_ERROR = 'claim/find-claim-by-not-found',
}

export const errors = {
  [ClaimErr.GET_ALL_FAILED]: 'Failed to get all tickets',
  [ClaimErr.GET_ALL_NOT_FOUND_ERROR]: 'Failed to get all tickets, not found',
  [ClaimErr.GET_CLAIM_BY_ID_FAILED]: 'Failed to get ticket',
  [ClaimErr.GET_CLAIM_BY_ID_NOT_FOUND_ERROR]: 'Failed to get ticket, not found',
  [ClaimErr.CREATE_CLAIM_ERROR]: 'Failed to create ticket',
  [ClaimErr.CREATE_CLAIM_NOT_FOUND_ERROR]: 'Failed to create ticket, not found',
  [ClaimErr.UPDATE_CLAIM_ERROR]: 'Failed to update ticket',
  [ClaimErr.UPDATE_CLAIM_NOT_FOUND_ERROR]: 'Failed to update ticket, not found',
  [ClaimErr.REFUND_CLAIM_FAILED]: 'Failed to refund ticket',
  [ClaimErr.REFUND_CLAIM_NOT_FOUND_ERROR]: 'Failed to refund ticket, not found',
  [ClaimErr.REPLY_CLAIM_FAILED]: 'Failed to reply ticket',
  [ClaimErr.REPLY_CLAIM_NOT_FOUND_ERROR]: 'Failed to reply ticket, not found',
  [ClaimErr.FIND_CLAIM_BY_FAILED]: 'Failed to find ticket',
  [ClaimErr.FIND_CLAIM_BY_NOT_FOUND_ERROR]: 'Failed to find ticket, not found',
};

export const errorFactory = new ErrorFactory<ClaimErr>('Claim', errors);
