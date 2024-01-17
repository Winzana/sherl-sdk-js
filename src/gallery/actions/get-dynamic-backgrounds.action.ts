import { SherlError } from '../../common';
import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IDynamicBackground, IGetDynamicBackgroundFilters } from '../types';

/**
 * Retrieves dynamic backgrounds based on specified filters.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make the API request.
 * @param {IGetDynamicBackgroundFilters} [filters] - Optional filters to apply to the backgrounds.
 * @return {Promise<Pagination<IDynamicBackground>>} A promise that resolves to a pagination object containing the dynamic backgrounds.
 */
export const getDynamicBackgrounds = async (
  fetcher: Fetcher,
  filters?: IGetDynamicBackgroundFilters,
): Promise<Pagination<IDynamicBackground>> => {
  try {
    const response = await fetcher.get<Pagination<IDynamicBackground>>(
      endpoints.DYNAMIC_BACKGROUND,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED),
        );
    }
  }
};
