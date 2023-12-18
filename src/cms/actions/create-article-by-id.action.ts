import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleUpdateInputDto, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Update an article by its unique identifier.
 *
 * This function sends a PUT request to update an article in the CMS
 * using the provided ICMSArticleUpdateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be updated.
 * @param {ICMSArticleUpdateInputDto} updatedArticle - The updated article data.
 * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
 * @throws {CmsErr.CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_NOT_FOUND} Throws an error if the CMS is not found (HTTP 404).
 * @throws {CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED} Throws an error for other failure scenarios.
 */
export const createArticleById = async (
  fetcher: Fetcher,
  id: string,
  updatedArticle: ICMSArticleUpdateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.put<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_POSTS, {
        id,
      }),
      updatedArticle,
    );

    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED);
  }
};
