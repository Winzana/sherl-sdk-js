import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IGallery } from '../types';

export const deleteGallery = async (
  fetcher: Fetcher,
  galleryId: string,
): Promise<IGallery> => {
  try {
    const response = await fetcher.delete<IGallery>(
      StringUtils.bindContext(endpoints.GALLERY, {
        id: galleryId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.DELETE_GALLERY_FORBIDDEN);
      case 404:
        throw errorFactory.create(GalleryErr.GALLERY_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.DELETE_GALLERY_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(GalleryErr.DELETE_GALLERY_FAILED),
    );
  }
};
