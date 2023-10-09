import { ErrorFactory } from '../../common/errors';

export enum QuotaErr {
  FETCH_FAILED = 'quota/fetch-failed',
}

export const errors = {
  [QuotaErr.FETCH_FAILED]: 'Failed to fetch quota',
};

export const errorFactory = new ErrorFactory<QuotaErr>('Quota', errors);
