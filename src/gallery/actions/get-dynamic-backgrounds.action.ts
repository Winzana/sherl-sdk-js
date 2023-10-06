import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.GET_DYNAMIC_BACKGROUNDS_FAILED);
  }
};
