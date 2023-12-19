import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { getSherlError } from '../../common/utils';

/**
 * Get an article by its slug.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} slug - The slug of the article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the retrieved article information.
 */
export const getArticleBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_SLUG, { slug }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED_ARTICLE_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.ARTICLE_NOT_FOUND);
      default:
        throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED));
  }
};
