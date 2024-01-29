import { ErrorFactory } from '../common/errors';

export enum SearchErr {
  GET_PUBLIC_SEARCH_FAILED = 'search/fetch-failed',
  GET_PUBLIC_SEARCH_FORBIDDEN = 'search/fetch-failed-forbidden',
}

export const errors = {
  [SearchErr.GET_PUBLIC_SEARCH_FAILED]: 'Failed to fetch search API',
  [SearchErr.GET_PUBLIC_SEARCH_FORBIDDEN]:
    'Failed to fetch search API, forbidden',
};

export const errorFactory = new ErrorFactory<SearchErr>('Search', errors);
