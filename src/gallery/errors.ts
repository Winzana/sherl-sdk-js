import { ErrorFactory } from '../common/errors';

export enum GalleryErr {
  GET_GALLERIES_FAILED = 'gallery/get-gallery-failed',
  CREATION_FAILED = 'gallery/creation-failed',
  DELETION_FAILED = 'gallery/deletion-failed',
  ADD_DYNAMIC_BACKGROUND_FAILED = 'gallery/add-dynamic-background-failed',
  UPDATE_DYNAMIC_BACKGROUND_FAILED = 'gallery/update-dynamic-background-failed',
  DELETE_DYNAMIC_BACKGROUND_FAILED = 'gallery/delete-dynamic-background-failed',
  GET_DYNAMIC_BACKGROUNDS_FAILED = 'gallery/get-dynamic-backgrounds-failed',
}

const errors = {
  [GalleryErr.GET_GALLERIES_FAILED]: 'Failed to get galleries',
  [GalleryErr.CREATION_FAILED]: 'Failed to create gallery',
  [GalleryErr.DELETION_FAILED]: 'Failed to delete gallery',
  [GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to add dynamic background',
  [GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to update dynamic background',
  [GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to delete dynamic background',
  [GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED]:
    'Failed to get dynamic backgrounds',
};

export const errorFactory = new ErrorFactory<GalleryErr>('Gallery', errors);
