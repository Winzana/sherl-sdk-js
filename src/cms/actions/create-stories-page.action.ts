import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStoryCreateInputDto } from '../types';

/**
 * Creates a new stories page in the CMS.
 *
 * This function is an asynchronous operation for creating a new stories page
 * in the Content Management System (CMS). It sends a POST request to the CMS's
 * story creation endpoint with the provided story data. If the request is
 * successful (indicated by a 201 status code), the function returns the
 * details of the newly created stories page. If any error occurs, such as
 * a response with a status other than 201 or a connectivity issue, the function
 * throws a specific error indicating the creation failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICMSArticleStoryCreateInputDto} data - The data for creating the new stories page.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the newly created stories page.
 * @throws {CmsErr.CMS_CREATE_STORIES_FAILED} Throws an error if the stories page creation fails.
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
