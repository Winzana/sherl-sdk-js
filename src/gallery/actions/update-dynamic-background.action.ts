import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { GalleryErr, errorFactory } from '../errors';
import { ICreateDynamicBackgroundInputDto, IDynamicBackground } from '../types';

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
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.UPDATE_DYNAMIC_BACKGROUND_FAILED);
  }
};
