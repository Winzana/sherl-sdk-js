import { ErrorFactory } from '../common/errors';

export enum OpinionErr {
  FETCH_FAILED = 'opinion/fetch-failed',
  NOT_FOUND = 'opinion/not-found',
  CREATE_OPINION_FAILED = 'opinion/creation-failed',
  CREATE_OPINION_CLAIM_FAILED = 'opinion/creation-claim-failed',
  UPDATE_OPINION_FAILED = 'opinion/update-failed',
  FETCH_OPINION_AVERAGE_FAILED = 'opinion/fetch-average-failed',
}

export const errors = {
  [OpinionErr.FETCH_FAILED]: 'Failed to fetch opinion API',
  [OpinionErr.NOT_FOUND]: 'Opinion not found',
  [OpinionErr.CREATE_OPINION_FAILED]: 'Failed to create new opinion',
  [OpinionErr.CREATE_OPINION_CLAIM_FAILED]: 'Failed to create opinion claim',
  [OpinionErr.UPDATE_OPINION_FAILED]: 'Failed to update opinion',
  [OpinionErr.FETCH_OPINION_AVERAGE_FAILED]: 'Failed to fetch opinion average',
};

export const errorFactory = new ErrorFactory<OpinionErr>('Opinion', errors);
