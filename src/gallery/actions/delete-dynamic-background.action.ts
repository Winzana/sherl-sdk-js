import { Fetcher } from '../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(GalleryErr.DELETE_DYNAMIC_BACKGROUND_FAILED);
  }
};
