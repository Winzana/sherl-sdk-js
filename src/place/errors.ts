import { ErrorFactory } from '../common/errors';

export enum PlaceErr {
  FETCH_FAILED = 'place/fetch-failed',
  FETCH_PLACES_NOT_FOUND = 'place/not-found',
  FETCH_PLACES_FORBIDDEN = 'place/forbidden',
  FETCH_PLACES_ALREADY_EXIST = 'place/already-exist',
}

export const errors = {
  [PlaceErr.FETCH_FAILED]: 'Failed to fetch place API',
  [PlaceErr.FETCH_PLACES_NOT_FOUND]: 'Place not found',
  [PlaceErr.FETCH_PLACES_FORBIDDEN]: 'Place forbidden',
  [PlaceErr.FETCH_PLACES_ALREADY_EXIST]: 'Place already exists',
};

export const errorFactory = new ErrorFactory<PlaceErr>('Place', errors);
