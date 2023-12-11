import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
/**
 * Retrieves an article by its ID from the CMS.
 *
 * This function is an asynchronous operation designed to fetch a specific
 * article from the Content Management System (CMS) using its unique identifier (ID).
 * It sends a GET request to the CMS's article management endpoint, with the
 * article ID dynamically integrated into the endpoint URL via StringUtils.bindContext.
 * Upon a successful request (indicated by a 200 status code), the function
 * returns the data of the requested article. If any issue occurs, such as a
 * response with a status other than 200 or a connectivity problem, the function
 * throws a specific error indicating the retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the retrieved article.
 * @throws {CmsErr.CMS_GET_BY_ID_FAILED} Throws an error if the article retrieval fails.
 */
export const getArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, { id }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_BY_ID_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_BY_ID_FAILED);
  }
};
