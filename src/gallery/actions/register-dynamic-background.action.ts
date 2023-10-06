import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateDynamicBackgroundInputDto, IDynamicBackground } from '../types';

export const registerDynamicBackground = async (
  fetcher: Fetcher,
  dynamicBackground: ICreateDynamicBackgroundInputDto,
): Promise<IDynamicBackground> => {
  try {
    const response = await fetcher.post<IDynamicBackground>(
      endpoints.DYNAMIC_BACKGROUND,
      dynamicBackground,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.ADD_DYNAMIC_BACKGROUND_FAILED);
  }
};
