import { ErrorFactory } from '../common/errors';

export enum PlaceErr {
  FETCH_FAILED = 'place/fetch-failed',
  FETCH_PLACES_FORBIDDEN = 'place/forbidden',
}

export const errors = {
  [PlaceErr.FETCH_FAILED]: 'Failed to fetch place API',
  [PlaceErr.FETCH_PLACES_FORBIDDEN]: 'Place forbidden',
};

export const errorFactory = new ErrorFactory<PlaceErr>('Place', errors);
