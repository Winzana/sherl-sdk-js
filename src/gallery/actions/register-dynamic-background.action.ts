import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateDynamicBackgroundInputDto, IDynamicBackground } from '../types';

/**
 * Registers a dynamic background using the provided fetcher and dynamicBackground input.
 *
 * @param {Fetcher} fetcher - The fetcher used to make the HTTP request.
 * @param {ICreateDynamicBackgroundInputDto} dynamicBackground - The input data for creating a dynamic background.
 * @return {Promise<IDynamicBackground>} - A promise that resolves to the created dynamic background.
 */
export const registerDynamicBackground = async (
  fetcher: Fetcher,
  dynamicBackground: ICreateDynamicBackgroundInputDto,
): Promise<IDynamicBackground> => {
  try {
    const response = await fetcher.post<IDynamicBackground>(
      endpoints.DYNAMIC_BACKGROUND,
      dynamicBackground,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FORBIDDEN);
      default:
        throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED),
    );
  }
};
