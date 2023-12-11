import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Retrieves a public article by its ID from the CMS.
 *
 * This asynchronous function is designed to fetch a specific public article
 * from the Content Management System (CMS) using its unique identifier (ID).
 * It sends a GET request to the CMS's articles management endpoint, integrating
 * the article ID into the endpoint URL using StringUtils.bindContext. If the
 * request successfully completes (indicated by a 200 status code), the function
 * returns the data of the requested article. In the event of any issues, such
 * as a response with a status other than 200 or connectivity problems, the
 * function throws a specific error indicating the retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the public article to be retrieved.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the retrieved public article.
 * @throws {CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED} Throws an error if the public article retrieval fails.
 */
export const getPublicArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, { id }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_FIND_ID_FAILED);
  }
};
