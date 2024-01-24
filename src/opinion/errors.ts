import { ErrorFactory } from '../common/errors';

export enum OpinionErr {
  FETCH_OPINIONS_FAILED = 'opinion/fetch-failed',
  GET_PUBLIC_OPINIONS_FAILED = 'opinion/get-public-options-failed',
  OPINION_NOT_FOUND = 'opinion/not-found',
  FETCH_OPINION_I_GIVE_FAILD = 'opinion/fetch-opinion-i-give-faild',
  CREATE_OPINION_FAILED = 'opinion/creation-failed',
  CREATE_OPINION_CLAIM_FAILED = 'opinion/creation-claim-failed',
  UPDATE_OPINION_FAILED = 'opinion/update-failed',
  FETCH_OPINION_AVERAGE_FAILED = 'opinion/fetch-average-failed',
  CREATE_OPINION_CLAIM_FORBIDDEN = 'opinion/creation-claim-forbidden',
  CREATE_OPINION_FORBIDDEN = 'opinion/creation-claim-forbidden',
  FETCH_OPINION_AVERAGE_FORBIDDEN = 'opinion/fetch-average-forbidden',
  FETCH_OPINION_I_GIVE_FORBIDDEN = 'opinion/fetch-opinion-i-give-forbidden',
  FETCH_OPINIONS_FORBIDDEN = 'opinion/fetch-opinion-forbidden',
  FETCH_PUBLIC_OPINIONS_FORBIDDEN = 'opinion/fetch-public-opinion-forbidden',
  UPDATE_OPINION_FORBIDDEN = 'opinion/update-forbidden',
}

export const errors = {
  [OpinionErr.FETCH_OPINIONS_FAILED]: 'Failed to fetch opinion API',
  [OpinionErr.GET_PUBLIC_OPINIONS_FAILED]: 'Failed to get public opinions',
  [OpinionErr.FETCH_OPINION_I_GIVE_FAILD]: 'failed to fetch opinion i give',
  [OpinionErr.OPINION_NOT_FOUND]: 'Opinion not found',
  [OpinionErr.CREATE_OPINION_FAILED]: 'Failed to create new opinion',
  [OpinionErr.CREATE_OPINION_CLAIM_FAILED]: 'Failed to create opinion claim',
  [OpinionErr.UPDATE_OPINION_FAILED]: 'Failed to update opinion',
  [OpinionErr.FETCH_OPINION_AVERAGE_FAILED]: 'Failed to fetch opinion average',
  [OpinionErr.CREATE_OPINION_CLAIM_FORBIDDEN]:
    'Failed to create opinion forbidden',
  [OpinionErr.CREATE_OPINION_FORBIDDEN]: 'Failed to create opinion forbidden',
  [OpinionErr.FETCH_OPINION_AVERAGE_FORBIDDEN]:
    'Failed to fetch opinion forbidden',
  [OpinionErr.FETCH_OPINION_I_GIVE_FORBIDDEN]:
    'Failed to fetch opinion i give forbidden',
  [OpinionErr.FETCH_OPINIONS_FORBIDDEN]: 'Failed to fetch opinion forbidden',
  [OpinionErr.FETCH_PUBLIC_OPINIONS_FORBIDDEN]:
    'Failed to fetch opinion public forbidden',
  [OpinionErr.UPDATE_OPINION_FORBIDDEN]: 'Failed to update opinion forbidden',
};

export const errorFactory = new ErrorFactory<OpinionErr>('Opinion', errors);
