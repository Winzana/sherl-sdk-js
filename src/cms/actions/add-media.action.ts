import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { filterSherlError } from '../../common/utils';

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
      case 200:
        return response.data;
      case 201:
        throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
      case 404:
        throw errorFactory.create(CmsErr.CREATE_CMS_EVENT_FAILED_CMS_NOT_EXIST);
      case 409:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_EVENT_FAILED_EVENT_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED),
    );
    throw filteredError;
  }
};
