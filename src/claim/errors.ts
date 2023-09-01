import { ErrorFactory } from '../common/errors';

export enum ClaimErr {
  GET_ALL_FAILED = 'claim/get-all',
  GET_CLAIM_BY_ID_FAILED = 'claim/get-by-id',
  CREATE_CLAIM_ERROR = 'claim/create-by-id',
  UPDATE_CLAIM_ERROR = 'claim/update-by-id',
}

export const errors = {
  [ClaimErr.GET_ALL_FAILED]: 'Failed to get all tickets',
  [ClaimErr.GET_CLAIM_BY_ID_FAILED]: 'Failed to get ticket',
  [ClaimErr.CREATE_CLAIM_ERROR]: 'Failed to create ticket',
  [ClaimErr.UPDATE_CLAIM_ERROR]: 'Failed to update ticket',
};

export const errorFactory = new ErrorFactory<ClaimErr>('Claim', errors);
