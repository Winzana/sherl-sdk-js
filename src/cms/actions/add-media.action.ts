import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Add media to an existing CMS page.
 *
 * This function sends a POST request to add media to an existing CMS page
 * using the data provided in the ICMSArticleAddMediaDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {string} id - The identifier of the CMS page to which media is being added.
 * @param {ICMSArticleAddMediaDto} data - The data for adding media to the CMS page.
 * @returns {Promise<IArticle>} A promise that resolves to the updated article information.
 * @throws {CmsErr.CREATE_CMS_EVENT_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.ARTICLE_NOT_FOUND} Throws an error if the article is not found (HTTP 404).
 * @throws {CmsErr.CMS_ADD_MEDIA_FAILED} Throws an error for other failure scenarios.
 */
export const addMediaPage = async (
  fetcher: Fetcher,
  id: string,
  data: ICMSArticleAddMediaDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      StringUtils.bindContext(endpoints.MANAGE_MEDIA, {
        id,
      }),
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_ADD_MEDIA_FAILED);
  }
};
