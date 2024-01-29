import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IGallery } from '../types';

/**
 * Deletes a gallery.
 *
 * @param {Fetcher} fetcher - the fetcher object used to make API requests
 * @param {string} galleryId - the ID of the gallery to be deleted
 * @return {Promise<IGallery>} a promise that resolves to the deleted gallery
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(GalleryErr.DELETE_GALLERY_FORBIDDEN);
      case 404:
        throw errorFactory.create(GalleryErr.GALLERY_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(GalleryErr.DELETE_GALLERY_FAILED),
        );
    }
  }
};
