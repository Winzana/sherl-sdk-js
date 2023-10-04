import { ErrorFactory } from '../../../common/errors';

export enum AdvertisementErr {
  FETCH_FAILED = 'advertisement/fetch-failed',
  NOT_FOUND = 'advertisement/not-found',
  UPDATE_FAILED = 'advertisement/update-failed',
  DELETE_FAILED = 'advertisement/delete-failed',
  CREATION_FAILED = 'advertisement/creation-failed',
}

export const errors = {
  [AdvertisementErr.FETCH_FAILED]: 'Failed to fetch advertisements',
  [AdvertisementErr.NOT_FOUND]: 'Advertisement not found',
  [AdvertisementErr.UPDATE_FAILED]: 'Update advertisement failed',
  [AdvertisementErr.DELETE_FAILED]: 'Delete advertisement failed',
  [AdvertisementErr.CREATION_FAILED]: 'Create advertisement failed',
};

export const errorFactory = new ErrorFactory<AdvertisementErr>(
  'Advertisement',
  errors,
);
