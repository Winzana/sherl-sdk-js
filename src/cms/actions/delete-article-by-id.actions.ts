import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
/**
 * Delete an article by its unique identifier.
 *
 * This function sends a DELETE request to delete an article in the CMS
 * using the provided unique identifier. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be deleted.
 * @returns {Promise<IArticle>} A promise that resolves to the deleted article information.
 * @throws {CmsErr.CMS_DELETE_BY_ID_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_NOT_FOUND} Throws an error if the CMS is not found (HTTP 404).
 * @throws {CmsErr.CMS_DELETE_BY_ID_FAILED} Throws an error for other failure scenarios.
 */
export const deleteArticleById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.delete<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, {
        id,
      }),
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_DELETE_BY_ID_FAILED);
  }
};
