import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateGalleryInputDto, IGallery } from '../types';

export const createGallery = async (
  fetcher: Fetcher,
  gallery: ICreateGalleryInputDto,
): Promise<IGallery> => {
  try {
    const response = await fetcher
      .post<IGallery>(endpoints.GALLERY, gallery)
      .catch(() => {
        throw errorFactory.create(GalleryErr.CREATE_GALLERY_FAILED);
      });
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.CREATE_GALLERY_FORBIDDEN);
      case 404:
        throw errorFactory.create(GalleryErr.CREATE_GALLERY_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.CREATE_GALLERY_FAILED);
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(GalleryErr.CREATE_GALLERY_FAILED),
    );
    throw sherlError;
  }
};
