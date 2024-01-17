import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { IDynamicBackground } from '../types';

/**
 * Deletes a dynamic background.
 *
 * @param {Fetcher} fetcher - The Fetcher object used for making HTTP requests.
 * @param {string} dynamicBackgroundId - The ID of the dynamic background to delete.
 * @return {Promise<IDynamicBackground>} A Promise that resolves to the deleted dynamic background.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch (error.status) {
      case 403:
        throw errorFactory.create(
          GalleryErr.DELETE_DYNAMIC_BACKGROUND_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(GalleryErr.DYNAMIC_BACKGROUND_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED),
        );
    }
  }
};
