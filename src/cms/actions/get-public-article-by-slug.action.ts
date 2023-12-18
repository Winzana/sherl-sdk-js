import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Get a public article by its slug.
 *
 * This function sends a GET request to retrieve a public article in the CMS
 * using the provided slug. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} slug - The slug of the public article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the retrieved public article information.
 * @throws {CmsErr.CMS_GET_SLUG_FAILED_ARTICLE_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_NOT_FOUND} Throws an error if the CMS is not found (HTTP 404).
 * @throws {CmsErr.CMS_GET_SLUG_FAILED} Throws an error for other failure scenarios.
 */
export const getPublicArticleBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_ARTICLE_BY_SLUG, { slug }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
  }
};
