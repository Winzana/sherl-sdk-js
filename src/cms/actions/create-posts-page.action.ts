import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleCreateInputDto } from '../types';
/**
 * Create a new posts page in the CMS.
 *
 * This function sends a POST request to create a new posts page in the CMS
 * using the provided ICMSArticleCreateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleCreateInputDto} data - The data for creating a new posts page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created posts page information.
 * @throws {CmsErr.CREATE_CMS_POSTS_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_CREATE_POSTS_FAILED} Throws an error for other failure scenarios.
 */
export const createPostsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.MANAGE_ARTICLES,
      data,
    );

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
  }
};
