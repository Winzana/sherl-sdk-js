import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateDynamicBackgroundInputDto, IDynamicBackground } from '../types';

export const registerDynamicBackground = async (
  fetcher: Fetcher,
  dynamicBackground: ICreateDynamicBackgroundInputDto,
): Promise<IDynamicBackground> => {
  try {
    const response = await fetcher
      .post<IDynamicBackground>(endpoints.DYNAMIC_BACKGROUND, dynamicBackground)
      .catch(() => {
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED);
      });

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FORBIDDEN);
      case 404:
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED);
    }
  } catch (error) {
    const sherlError = getSherlError(
      error,
      errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED),
    );
    throw sherlError;
  }
};
