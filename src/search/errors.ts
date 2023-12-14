import { ErrorFactory } from '../common/errors';

export enum SearchErr {
  FETCH_FAILED = 'search/fetch-failed',
  SEARCH_FORBIDDEN = 'search/fetch-failed-forbidden',
}

export const errors = {
  [SearchErr.FETCH_FAILED]: 'Failed to fetch search API',
  [SearchErr.SEARCH_FORBIDDEN]: 'Failed to fetch search API, forbidden',
};

export const errorFactory = new ErrorFactory<SearchErr>('Search', errors);
