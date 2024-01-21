import { ErrorFactory } from '../../../common/errors';

export enum PictureErr {
  ADD_PICTURE_PRODUCT_FAILED = 'product/add-picture-failed',
  ADD_PICTURE_PRODUCT_FORBIDDEN = 'product/add-picture-forbidden',
  REMOVE_PICTURE_PRODUCT_FAILED = 'product/remove-picture-failed',
  REMOVE_PICTURE_PRODUCT_FORBIDDEN = 'product/remove-picture-forbidden',
  PRODUCT_OR_MEDIA_NOT_FOUND = 'product/product-or-media-not-found',
}

export const errors = {
  [PictureErr.ADD_PICTURE_PRODUCT_FAILED]: 'Failed to add picture to product',
  [PictureErr.ADD_PICTURE_PRODUCT_FORBIDDEN]:
    'Failed to add picture to product, forbidden',
  [PictureErr.REMOVE_PICTURE_PRODUCT_FAILED]:
    'Failed to remove picture from product',
  [PictureErr.REMOVE_PICTURE_PRODUCT_FORBIDDEN]:
    'Failed to remove picture from product, forbidden',
  [PictureErr.PRODUCT_OR_MEDIA_NOT_FOUND]: 'Product or media not found',
};

export const errorFactory = new ErrorFactory<PictureErr>('Picure', errors);
