import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleAddMediaDto } from '../types';
import { StringUtils } from '../../common/utils/string';

/**
 * Adds media to an article page by its ID.
 *
 * This asynchronous function adds media content to a specified article in the CMS.
 * It sends a POST request to the CMS's media management endpoint with the media data.
 * The function checks for a successful response (status 201) and returns the updated
 * article information. If the media addition process encounters any errors, such as
 * a non-201 status response or connectivity issues, a specific error is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance for making API requests.
 * @param {string} id - The unique identifier of the article to add media to.
 * @param {ICMSArticleAddMediaDto} data - The media content to be added to the article.
 * @returns {Promise<IArticle>} A promise that resolves to the article with added media.
 * @throws {CmsErr.CMS_ADD_MEDIA_FAILED} Throws an error if the media addition fails.
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
