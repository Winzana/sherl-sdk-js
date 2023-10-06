import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IGallery, IGetGalleriesFilters } from '../types';

export const getGalleries = async (
  fetcher: Fetcher,
  filters?: IGetGalleriesFilters,
): Promise<Pagination<IGallery>> => {
  try {
    const response = await fetcher.get<Pagination<IGallery>>(
      endpoints.GALLERY,
      filters,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.GET_GALLERIES_FAILED);
  }
};
