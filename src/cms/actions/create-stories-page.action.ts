import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStoryCreateInputDto } from '../types';

/**
 * Create a new stories page in the CMS.
 *
 * This function sends a POST request to create a new stories page in the CMS
 * using the provided ICMSArticleStoryCreateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleStoryCreateInputDto} data - The data for creating a new stories page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created stories page information.
 * @throws {CmsErr.CREATE_CMS_STORIES_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_CREATE_STORIES_FAILED} Throws an error for other failure scenarios.
 */
export const createStoriesPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStoryCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CREATE_STORIES,
      data,
    );

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_STORIES_FAILED);
  }
};
