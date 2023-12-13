import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IGallery, IGetGalleriesFilters } from '../types';

export const getGalleries = async (
  fetcher: Fetcher,
  filters?: IGetGalleriesFilters,
): Promise<Pagination<IGallery>> => {
  try {
    const response = await fetcher
      .get<Pagination<IGallery>>(endpoints.GALLERY, filters)
      .catch(() => {
        throw errorFactory.create(GalleryErr.GET_GALLERIES_FAILED);
      });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.GET_GALLERIES_FORBIDDEN);
      case 404:
        throw errorFactory.create(GalleryErr.GET_GALLERIES_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.GET_GALLERIES_FAILED);
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(GalleryErr.GET_GALLERIES_FAILED),
    );
    throw sherlError;
  }
};
