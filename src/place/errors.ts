import { ErrorFactory } from '../common/errors';

export enum PlaceErr {
  GET_PLACES_FAILED = 'place/fetch-failed',
  GET_PLACES_FORBIDDEN = 'place/forbidden',
}

export const errors = {
  [PlaceErr.GET_PLACES_FAILED]: 'Failed to fetch place API',
  [PlaceErr.GET_PLACES_FORBIDDEN]: 'Place forbidden',
};

export const errorFactory = new ErrorFactory<PlaceErr>('Place', errors);
