import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';

export const addMediaPage = async (
  fetcher: Fetcher,
  id: string,
  data: ICMSArticleAddMediaDto,
) => {
  try {
    const response = await fetcher.post<ICMSArticleAddMediaDto>(
      StringUtils.bindContext(endpoints.ADD_MEDIA, {
        id,
      }),
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
  }
};
