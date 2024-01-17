import { SherlError } from '../../common';
import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IGallery, IGetGalleriesFilters } from '../types';

/**
 * Retrieves galleries based on the provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make API requests.
 * @param {IGetGalleriesFilters} filters - Optional filters to apply to the request.
 * @return {Promise<Pagination<IGallery>>} A promise that resolves to the paginated list of galleries.
 */
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
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(GalleryErr.GET_GALLERIES_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(GalleryErr.GET_GALLERIES_FAILED),
        );
    }
  }
};
