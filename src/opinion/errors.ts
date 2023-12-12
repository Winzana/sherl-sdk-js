import { ErrorFactory } from '../common/errors';

export enum OpinionErr {
  FETCH_FAILED = 'opinion/fetch-failed',
  NOT_FOUND = 'opinion/not-found',
  CREATE_OPINION_FAILED = 'opinion/creation-failed',
  CREATE_OPINION_CLAIM_FAILED = 'opinion/creation-claim-failed',
  UPDATE_OPINION_FAILED = 'opinion/update-failed',
  FETCH_OPINION_AVERAGE_FAILED = 'opinion/fetch-average-failed',
  CREATE_OPINION_CLAIM_FORBIDDEN = 'opinion/creation-claim-forbidden',
  CREATE_OPINION_CLAIM_NOT_FOUND = 'opinion/creation-claim-not-found',
  CREATE_OPINION_CLAIM_ALREADY_EXIST = 'opinion/creation-claim-already-exist',
  CREATE_OPINION_FORBIDDEN = 'opinion/creation-claim-forbidden',
  CREATE_OPINION_NOT_FOUND = 'opinion/creation-claim-not-found',
  CREATE_OPINION_ALREADY_EXIST = 'opinion/creation-claim-already-exist',
  FETCH_OPINION_AVERAGE_FORBIDDEN = 'opinion/fetch-average-forbidden',
  FETCH_OPINION_AVERAGE_NOT_FOUND = 'opinion/fetch-average-not-found',
  FETCH_OPINION_I_GIVE_FORBIDDEN = 'opinion/fetch-opinion-i-give-forbidden',
  FETCH_OPINION_I_GIVE_NOT_FOUND = 'opinion/fetch-opinion-i-give-not-found',
  FETCH_OPINIONS_FORBIDDEN = 'opinion/fetch-opinion-forbidden',
  FETCH_OPINIONS_NOT_FOUND = 'opinion/fetch-opinion-not-found',
  FETCH_PUBLIC_OPINIONS_FORBIDDEN = 'opinion/fetch-public-opinion-forbidden',
  FETCH_PUBLIC_OPINIONS_NOT_FOUND = 'opinion/fetch-public-opinion-not-found',
  UPDATE_OPINION_FORBIDDEN = 'opinion/update-forbidden',
  UPDATE_OPINION_NOT_FOUND = 'opinion/update-not-found',
}

export const errors = {
  [OpinionErr.FETCH_FAILED]: 'Failed to fetch opinion API',
  [OpinionErr.NOT_FOUND]: 'Opinion not found',
  [OpinionErr.CREATE_OPINION_FAILED]: 'Failed to create new opinion',
  [OpinionErr.CREATE_OPINION_CLAIM_FAILED]: 'Failed to create opinion claim',
  [OpinionErr.UPDATE_OPINION_FAILED]: 'Failed to update opinion',
  [OpinionErr.FETCH_OPINION_AVERAGE_FAILED]: 'Failed to fetch opinion average',
  [OpinionErr.CREATE_OPINION_CLAIM_FORBIDDEN]:
    'Failed to create opinion forbidden',
  [OpinionErr.CREATE_OPINION_CLAIM_NOT_FOUND]:
    'Failed to create opinion not found',
  [OpinionErr.CREATE_OPINION_CLAIM_ALREADY_EXIST]:
    'Failed to create opinion already exists',
  [OpinionErr.CREATE_OPINION_FORBIDDEN]: 'Failed to create opinion forbidden',
  [OpinionErr.CREATE_OPINION_NOT_FOUND]: 'Failed to create opinion not found',
  [OpinionErr.CREATE_OPINION_ALREADY_EXIST]:
    'Failed to create opinion already exists',
  [OpinionErr.FETCH_OPINION_AVERAGE_FORBIDDEN]:
    'Failed to fetch opinion forbidden',
  [OpinionErr.FETCH_OPINION_AVERAGE_NOT_FOUND]:
    'Failed to fetch opinion not found',
  [OpinionErr.FETCH_OPINION_I_GIVE_FORBIDDEN]:
    'Failed to fetch opinion i give forbidden',
  [OpinionErr.FETCH_OPINION_I_GIVE_NOT_FOUND]:
    'Failed to fetch opinion i give not found',
  [OpinionErr.FETCH_OPINIONS_FORBIDDEN]: 'Failed to fetch opinion forbidden',
  [OpinionErr.FETCH_OPINIONS_NOT_FOUND]: 'Failed to fetch opinion not found',
  [OpinionErr.FETCH_PUBLIC_OPINIONS_FORBIDDEN]:
    'Failed to fetch opinion public forbidden',
  [OpinionErr.FETCH_PUBLIC_OPINIONS_NOT_FOUND]:
    'Failed to fetch opinion public not found',
  [OpinionErr.UPDATE_OPINION_FORBIDDEN]: 'Failed to update opinion forbidden',
  [OpinionErr.UPDATE_OPINION_NOT_FOUND]: 'Failed to update opinion not found',
};

export const errorFactory = new ErrorFactory<OpinionErr>('Opinion', errors);
