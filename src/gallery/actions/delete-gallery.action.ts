import { Fetcher } from '../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.DELETION_FAILED);
  }
};
