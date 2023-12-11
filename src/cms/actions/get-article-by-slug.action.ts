import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
/**
 * Retrieves an article by its slug from the CMS.
 *
 * This function is an asynchronous operation aimed at fetching a specific
 * article from the Content Management System (CMS) using its slug, a URL-friendly
 * identifier. It sends a GET request to the CMS's endpoint for slug-based retrieval,
 * with the article slug dynamically integrated into the URL using StringUtils.bindContext.
 * If the request is successful (indicated by a 200 status code), the function
 * returns the data of the requested article. In case of any issues, such as a
 * response with a status other than 200 or connectivity problems, the function
 * throws a specific error indicating the retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} slug - The slug of the article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the retrieved article.
 * @throws {CmsErr.CMS_GET_SLUG_FAILED} Throws an error if the article retrieval by slug fails.
 */
export const getArticleBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.GET_SLUG, { slug }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_SLUG_FAILED);
  }
};
