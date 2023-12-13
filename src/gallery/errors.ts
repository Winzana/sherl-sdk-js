import { ErrorFactory } from '../common/errors';

export enum GalleryErr {
  // ADD DYNAMIC BACKGROUND
  ADD_DYNAMIC_BACKGROUND_FAILED = 'gallery/add-dynamic-background-failed',
  ADD_DYNAMIC_BACKGROUND_FORBIDDEN = 'gallery/add-dynamic-background-forbidden',
  ADD_DYNAMIC_BACKGROUND_NOT_FOUND = 'gallery/add-dynamic-background-not-found',

  // CREATE GALLERY
  CREATE_GALLERY_FAILED = 'gallery/create-gallery-failed',
  CREATE_GALLERY_FORBIDDEN = 'gallery/create-gallery-forbidden',
  CREATE_GALLERY_NOT_FOUND = 'gallery/create-gallery-not-found',

  // DELETE DYNAMIC BACKGROUND
  DELETE_DYNAMIC_BACKGROUND_FAILED = 'gallery/delete-dynamic-background-failed',
  DELETE_DYNAMIC_BACKGROUND_FORBIDDEN = 'gallery/delete-dynamic-background-forbidden',
  DELETE_DYNAMIC_BACKGROUND_NOT_FOUND = 'gallery/delete-dynamic-background-not-found',

  // DELETE GALLERY
  DELETE_GALLERY_FAILED = 'gallery/delete-gallery-failed',
  DELETE_GALLERY_FORBIDDEN = 'gallery/delete-gallery-forbidden',
  DELETE_GALLERY_NOT_FOUND = 'gallery/delete-gallery-not-found',

  // GET DYNAMIC BACKGROUNDS
  GET_DYNAMIC_BACKGROUNDS_FAILED = 'gallery/get-dynamic-backgrounds-failed',
  GET_DYNAMIC_BACKGROUNDS_FORBIDDEN = 'gallery/get-dynamic-backgrounds-forbidden',
  GET_DYNAMIC_BACKGROUNDS_NOT_FOUND = 'gallery/get-dynamic-backgrounds-not-found',

  // GET GALLERIES
  GET_GALLERIES_FAILED = 'gallery/get-gallery-failed',
  GET_GALLERIES_FORBIDDEN = 'gallery/get-gallery-forbidden',
  GET_GALLERIES_NOT_FOUND = 'gallery/get-gallery-not-found',

  // UPDATE DYNAMIC BACKGROUND
  UPDATE_DYNAMIC_BACKGROUND_FAILED = 'gallery/update-dynamic-background-failed',
  UPDATE_DYNAMIC_BACKGROUND_FORBIDDEN = 'gallery/update-dynamic-background-forbidden',
  UPDATE_DYNAMIC_BACKGROUND_NOT_FOUND = 'gallery/update-dynamic-background-not-found',
}

const errors = {
  // ADD DYNAMIC
  [GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to add dynamic background',
  [GalleryErr.ADD_DYNAMIC_BACKGROUND_FORBIDDEN]:
    'Failed to add dynamic background. Forbidden access',
  [GalleryErr.ADD_DYNAMIC_BACKGROUND_NOT_FOUND]:
    'Failed to add dynamic background. Page not found',

  // CREATE GALLERY
  [GalleryErr.CREATE_GALLERY_FAILED]: 'Failed to create gallery',
  [GalleryErr.CREATE_GALLERY_FORBIDDEN]:
    'Failed to create gallery. Forbidden access',

  // DELETE DYNAMIC BACKGROUND
  [GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to delete dynamic background',
  [GalleryErr.DELETE_DYNAMIC_BACKGROUND_FORBIDDEN]:
    'Failed to delete dynamic background. Forbidden access',
  [GalleryErr.DELETE_DYNAMIC_BACKGROUND_NOT_FOUND]:
    'Failed to delete dynamic background. Page not found',

  // DELETE GALLERY
  [GalleryErr.DELETE_GALLERY_FAILED]: 'Failed to delete gallery',
  [GalleryErr.DELETE_GALLERY_FORBIDDEN]: 'Failed to delete gallery',
  [GalleryErr.DELETE_GALLERY_NOT_FOUND]: 'Failed to delete gallery',

  // UPDATE DYNAMIC BACKGROUND
  [GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FAILED]:
    'Failed to update dynamic background',
  [GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FORBIDDEN]:
    'Failed to update dynamic background. Forbidden access',
  [GalleryErr.UPDATE_DYNAMIC_BACKGROUND_NOT_FOUND]:
    'Failed to update dynamic background. Dynamic background not found',

  // GET DYNAMIC BACKGROUNDS
  [GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED]:
    'Failed to get dynamic backgrounds',
  [GalleryErr.GET_DYNAMIC_BACKGROUNDS_FORBIDDEN]:
    'Failed to get dynamic backgrounds. Forbidden access',
  [GalleryErr.GET_DYNAMIC_BACKGROUNDS_NOT_FOUND]:
    'Failed to get dynamic backgrounds. Page not found',

  // GET GALLERIES
  [GalleryErr.GET_GALLERIES_FAILED]: 'Failed to get galleries',
  [GalleryErr.GET_GALLERIES_FORBIDDEN]:
    'Failed to get galleries. Forbidden access',
  [GalleryErr.GET_GALLERIES_NOT_FOUND]:
    'Failed to get galleries. Page not found',
};

export const errorFactory = new ErrorFactory<GalleryErr>('Gallery', errors);
