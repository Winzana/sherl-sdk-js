import { ErrorFactory } from '../common/errors';

export enum PlaceErr {
  FETCH_FAILED = 'place/fetch-failed',
  NOT_FOUND = 'place/not-found',
}

export const errors = {
  [PlaceErr.FETCH_FAILED]: 'Failed to fetch place API',
  [PlaceErr.NOT_FOUND]: 'Place not found',
};

export const errorFactory = new ErrorFactory<PlaceErr>('Place', errors);
