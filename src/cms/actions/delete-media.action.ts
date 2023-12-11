import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
/**
 * Deletes an article by its ID in the CMS.
 *
 * This function is an asynchronous operation that handles the deletion of an
 * article in the Content Management System (CMS) using its unique identifier (ID).
 * It sends a DELETE request to the CMS's article management endpoint. The ID
 * of the article to be deleted is dynamically bound to the endpoint URL using
 * the StringUtils.bindContext method. Upon successful deletion, the function
 * returns the data of the deleted article. If any error occurs during the
 * deletion process, such as a failure in the DELETE request or connectivity issues,
 * the function throws a specific error indicating the deletion failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be deleted.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the deleted article.
 * @throws {CmsErr.CMS_DELETE_BY_ID_FAILED} Throws an error if the article deletion fails.
 */
export const deleteMediaPage = async (
  fetcher: Fetcher,
  id: string,
): Promise<IArticle> => {
  try {
    const response = await fetcher.delete<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_MEDIA, {
        id,
      }),
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_DELETE_MEDIA_FAILED);
  }
};
