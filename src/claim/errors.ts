import { ErrorFactory } from '../common/errors';

export enum ClaimErr {
  CLAIM_NOT_FOUND = 'claim/claim-not-found',

  GET_ALL_FAILED = 'claim/get-all',
  GET_ALL_FORBIDDEN = 'claim/get-all-forbidden',

  GET_CLAIM_BY_ID_FAILED = 'claim/get-by-id',
  GET_CLAIM_BY_ID_FORBIDDEN = 'claim/get-by-id-forbidden',

  CREATE_CLAIM_ERROR = 'claim/create-by-id',
  CREATE_CLAIM_FORBIDDEN = 'claim/create-by-id-forbidden',

  UPDATE_CLAIM_ERROR = 'claim/update-by-id',
  UPDATE_CLAIM_FORBIDDEN = 'claim/update-by-id-forbidden',

  REFUND_CLAIM_FAILED = 'claim/refund-failed',
  REFUND_CLAIM_FORBIDDEN = 'claim/refund-forbidden',

  REPLY_CLAIM_FAILED = 'claim/reply-failed',
  REPLY_CLAIM_FORBIDDEN = 'claim/reply-forbidden',

  FIND_CLAIM_BY_FAILED = 'claim/find-claim-by-failed',
  FIND_CLAIM_BY_FORBIDDEN = 'claim/find-claim-by-forbidden',
}

export const errors = {
  [ClaimErr.CLAIM_NOT_FOUND]: 'Claim error, not found',
  [ClaimErr.GET_ALL_FAILED]: 'Failed to get all tickets',
  [ClaimErr.GET_ALL_FORBIDDEN]: 'Failed to get all tickets, forbidden',

  [ClaimErr.GET_CLAIM_BY_ID_FAILED]: 'Failed to get ticket',
  [ClaimErr.GET_CLAIM_BY_ID_FORBIDDEN]: 'Failed to get ticket, forbidden',

  [ClaimErr.CREATE_CLAIM_ERROR]: 'Failed to create ticket',
  [ClaimErr.CREATE_CLAIM_FORBIDDEN]: 'Failed to create ticket, forbidden',

  [ClaimErr.UPDATE_CLAIM_ERROR]: 'Failed to update ticket',
  [ClaimErr.UPDATE_CLAIM_FORBIDDEN]: 'Failed to update ticket, forbidden',

  [ClaimErr.REFUND_CLAIM_FAILED]: 'Failed to refund ticket',
  [ClaimErr.REFUND_CLAIM_FORBIDDEN]: 'Failed to refund ticket, forbidden',

  [ClaimErr.REPLY_CLAIM_FAILED]: 'Failed to reply ticket',
  [ClaimErr.REPLY_CLAIM_FORBIDDEN]: 'Failed to reply ticket, forbidden',

  [ClaimErr.FIND_CLAIM_BY_FAILED]: 'Failed to find ticket',
  [ClaimErr.FIND_CLAIM_BY_FORBIDDEN]: 'Failed to find ticket, forbidden',
};

export const errorFactory = new ErrorFactory<ClaimErr>('Claim', errors);
