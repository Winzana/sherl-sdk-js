import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateDynamicBackgroundInputDto, IDynamicBackground } from '../types';

/**
 * Updates a dynamic background.
 *
 * @param {Fetcher} fetcher - The fetcher object used to make HTTP requests.
 * @param {string} dynamicBackgroundId - The ID of the dynamic background to update.
 * @param {Partial<ICreateDynamicBackgroundInputDto>} dynamicBackground - The partial dynamic background object with the updated values.
 * @return {Promise<IDynamicBackground>} The updated dynamic background.
 */
export const updateDynamicBackground = async (
  fetcher: Fetcher,
  dynamicBackgroundId: string,
  dynamicBackground: Partial<ICreateDynamicBackgroundInputDto>,
): Promise<IDynamicBackground> => {
  try {
    const response = await fetcher.patch<IDynamicBackground>(
      StringUtils.bindContext(endpoints.MANAGE_DYNAMIC_BACKGROUND, {
        id: dynamicBackgroundId,
      }),
      dynamicBackground,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(GalleryErr.DYNAMIC_BACKGROUND_NOT_FOUND);
      default:
        throw errorFactory.create(GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FAILED),
    );
  }
};
