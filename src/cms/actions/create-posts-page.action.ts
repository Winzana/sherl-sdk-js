import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleCreateInputDto } from '../types';

/**
 * Creates a new posts page in the CMS.
 *
 * This function is an asynchronous operation for creating a new posts page
 * in the Content Management System (CMS). It uses a POST request to the CMS's
 * articles management endpoint with the provided article data. If the request
 * is successful (indicated by a 201 status code), the function returns the
 * details of the newly created posts page. If any error occurs, such as a
 * response with a status other than 201 or a connectivity issue, the function
 * throws a specific error indicating the creation failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICMSArticleCreateInputDto} data - The data for creating the new posts page.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the newly created posts page.
 * @throws {CmsErr.CMS_CREATE_POSTS_FAILED} Throws an error if the posts page creation fails.
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
