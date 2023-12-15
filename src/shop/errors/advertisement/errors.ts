import { ErrorFactory } from '../../../common/errors';

export enum AdvertisementErr {
  CREATION_FAILED = 'advertisement/creation-failed',
  CREATION_FAILED_FORBIDDEN = 'advertisement/creation-failed-forbidden',
  UPDATE_FAILED = 'advertisement/update-failed',
  UPDATE_FAILED_FORBIDDEN = 'advertisement/update-failed-forbidden',
  DELETE_FAILED = 'advertisement/delete-failed',
  DELETE_FAILED_FORBIDDEN = 'advertisement/delete-failed-forbidden',
  GET_ADVERTISEMENT_BY_ID_FAILED = 'advertisement/get-advertisement-by-id-failed',
  GET_ADVERTISEMENT_BY_ID_FAILED_FORBIDDEN = 'advertisement/get-advertisement-by-id-failed-forbidden',
  GET_ADVERTISEMENTS_FAILED = 'advertisement/get-advertisements-failed',
  GET_ADVERTISEMENTS_FAILED_FORBIDDEN = 'advertisement/get-advertisements-failed-forbidden',
  GET_PUBLIC_ADVERTISEMENTS_FAILED = 'advertisement/get-public-advertisements-failed',
  GET_PUBLIC_ADVERTISEMENTS_FAILED_FORBIDDEN = 'advertisement/get-public-advertisements-failed-forbidden',
  ADVERTISEMENT_NOT_FOUND = 'advertisement/not-found',
}

export const errors = {
  [AdvertisementErr.CREATION_FAILED]: 'Create advertisement failed',
  [AdvertisementErr.CREATION_FAILED_FORBIDDEN]:
    'Create advertisement failed, forbidden',
  [AdvertisementErr.UPDATE_FAILED]: 'Update advertisement failed',
  [AdvertisementErr.UPDATE_FAILED_FORBIDDEN]:
    'Update advertisement failed, forbidden',
  [AdvertisementErr.DELETE_FAILED]: 'Delete advertisement failed',
  [AdvertisementErr.DELETE_FAILED_FORBIDDEN]:
    'Delete advertisement failed, forbidden',
  [AdvertisementErr.ADVERTISEMENT_NOT_FOUND]: 'Advertisement not found',
  [AdvertisementErr.GET_ADVERTISEMENT_BY_ID_FAILED]:
    'Get advertisement by id failed',
  [AdvertisementErr.GET_ADVERTISEMENT_BY_ID_FAILED_FORBIDDEN]:
    'Get advertisement by id failed forbidden',
  [AdvertisementErr.GET_ADVERTISEMENTS_FAILED]: 'Get advertisements failed',
  [AdvertisementErr.GET_ADVERTISEMENTS_FAILED_FORBIDDEN]:
    'Get advertisements failed forbidden',
  [AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FAILED]:
    'Get public advertisements failed',
  [AdvertisementErr.GET_PUBLIC_ADVERTISEMENTS_FAILED_FORBIDDEN]:
    'Get public advertisements failed, forbidden',
};

export const errorFactory = new ErrorFactory<AdvertisementErr>(
  'Advertisement',
  errors,
);
