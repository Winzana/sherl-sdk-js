import { ErrorFactory } from '../../common/errors';

export enum QuotaErr {
  FETCH_QUOTA_FIND_ONE_BY_FAILED = 'quota/fetch-failed',
  FETCH_QUOTA_FIND_ONE_BY_FORBIDDEN = 'quota/fetch-find-one-by-forbidden',
  FETCH_QUOTA_FIND_ONE_BY_ALREADY_EXISTS = 'quota/fetch-find-one-by-already-exists',
}

export const errors = {
  [QuotaErr.FETCH_QUOTA_FIND_ONE_BY_FAILED]: 'Failed to fetch quota',
  [QuotaErr.FETCH_QUOTA_FIND_ONE_BY_FORBIDDEN]: 'Fetch quota failed forbidden',
  [QuotaErr.FETCH_QUOTA_FIND_ONE_BY_ALREADY_EXISTS]:
    'Failed to fetch already exists quota',
};

export const errorFactory = new ErrorFactory<QuotaErr>('Quota', errors);
