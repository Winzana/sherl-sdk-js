import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IDynamicBackground } from '../types';

export const deleteDynamicBackground = async (
  fetcher: Fetcher,
  dynamicBackgroundId: string,
): Promise<IDynamicBackground> => {
  try {
    const response = await fetcher.delete<IDynamicBackground>(
      StringUtils.bindContext(endpoints.MANAGE_DYNAMIC_BACKGROUND, {
        id: dynamicBackgroundId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          GalleryErr.DELETE_DYNAMIC_BACKGROUND_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(GalleryErr.DYNAMIC_BACKGROUND_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED),
    );
  }
};
