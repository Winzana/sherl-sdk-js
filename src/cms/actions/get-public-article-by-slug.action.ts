import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
/**
 * Retrieves a public article by its slug from the CMS.
 *
 * This function performs an asynchronous operation to fetch a specific public
 * article from the Content Management System (CMS) using its slug, a URL-friendly
 * text identifier. It sends a GET request to the CMS endpoint dedicated to slug-based
 * article retrieval, incorporating the article's slug into the endpoint URL with
 * the help of StringUtils.bindContext. If the request is successfully completed
 * (indicated by a 200 status code), the function returns the data of the retrieved
 * article. In case of any error, such as a response with a status other than 200
 * or connectivity issues, the function throws a specific error indicating the
 * retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} slug - The slug of the public article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the retrieved public article.
 * @throws {CmsErr.CMS_GET_SLUG_FAILED} Throws an error if the public article retrieval by slug fails.
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
