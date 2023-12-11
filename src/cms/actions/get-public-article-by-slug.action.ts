import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const getPublicArticleBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_ARTICLE_BY_SLUG, { slug }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED_ARTICLE_NOT_FOUND);
      default:
        throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
  }
};
