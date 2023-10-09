import { ErrorFactory } from '../common/errors';

export enum SearchErr {
  FETCH_FAILED = 'search/fetch-failed',
}

export const errors = {
  [SearchErr.FETCH_FAILED]: 'Failed to fetch search API',
};

export const errorFactory = new ErrorFactory<SearchErr>('Search', errors);
