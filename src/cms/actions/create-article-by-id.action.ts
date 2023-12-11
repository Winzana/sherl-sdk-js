import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleUpdateInputDto, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Updates an existing article by its ID.
 *
 * This asynchronous function updates an article in the CMS using its ID.
 * It sends a PUT request to the appropriate endpoint with the updated article data.
 * On successful update, it returns the updated article information.
 * In case of any error during the update process, such as a failed API call,
 * it throws a specific error indicating the update failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the article to be updated.
 * @param {ICMSArticleUpdateInputDto} updatedArticle - The updated data for the article.
 * @returns {Promise<IArticle>} A promise that resolves to the updated article's information.
 * @throws {CmsErr.CMS_UPDATE_ARTICLE_BY_ID_FAILED} Throws an error if the update process fails.
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
