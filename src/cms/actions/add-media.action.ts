import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

export const addMediaPage = async (
  fetcher: Fetcher,
  id: string,
  data: ICMSArticleAddMediaDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_MEDIA, {
        id,
      }),
      data,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.CMS_NOT_FOUND);
      default:
        throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED),
    );
  }
};
