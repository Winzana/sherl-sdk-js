import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IDynamicBackground, IGetDynamicBackgroundFilters } from '../types';

export const getDynamicBackgrounds = async (
  fetcher: Fetcher,
  filters?: IGetDynamicBackgroundFilters,
): Promise<Pagination<IDynamicBackground>> => {
  try {
    const response = await fetcher.get<Pagination<IDynamicBackground>>(
      endpoints.DYNAMIC_BACKGROUND,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FORBIDDEN);
      default:
        throw errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED),
    );
  }
};
