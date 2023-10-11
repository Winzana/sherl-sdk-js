import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';

export const deleteMediaPage = async (
  fetcher: Fetcher,
  id: string,
): Promise<ICMSArticleAddMediaDto> => {
  try {
    const response = await fetcher.delete<ICMSArticleAddMediaDto>(
      StringUtils.bindContext(endpoints.DELETE_MEDIA, {
        id,
      }),
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_DELETE_MEDIA_FAILED);
  }
};
