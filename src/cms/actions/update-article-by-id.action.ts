import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleUpdateInputDto } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

export const updateArticleById = async (
  fetcher: Fetcher,
  id: string,
  updatedArticle: ICMSArticleUpdateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.put<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, {
        id,
      }),
      updatedArticle,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.ARTICLE_NOT_FOUND);
      default:
        throw errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED),
    );
  }
};
