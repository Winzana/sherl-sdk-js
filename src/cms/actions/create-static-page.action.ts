import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStaticPageCreateInputDto } from '../types';

/**
 * Create a new static page in the CMS.
 *
 * This function sends a POST request to create a new static page in the CMS
 * using the provided ICMSArticleStaticPageCreateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleStaticPageCreateInputDto} data - The data for creating a new static page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the newly created static page information.
 * @throws {CmsErr.CREATE_CMS_STATIC_PAGES_FAILED_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_CREATE_FAILED} Throws an error for other failure scenarios.
 */
export const createStaticPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStaticPageCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CMS_CREATE_STATIC,
      data,
    );

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
  }
};
