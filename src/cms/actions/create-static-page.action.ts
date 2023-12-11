import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStaticPageCreateInputDto } from '../types';

/**
 * Creates a new static page in the CMS.
 *
 * This function is an asynchronous operation for creating a new static page
 * in the Content Management System (CMS). It sends a POST request to the CMS's
 * static page creation endpoint with the provided static page data. If the
 * request is successful (indicated by a 201 status code), the function returns
 * the details of the newly created static page. If any error occurs, such as
 * a response with a status other than 201 or a connectivity issue, the function
 * throws a specific error indicating the creation failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICMSArticleStaticPageCreateInputDto} data - The data for creating the new static page.
 * @returns {Promise<IArticle>} A promise that resolves to the data of the newly created static page.
 * @throws {CmsErr.CMS_CREATE_FAILED} Throws an error if the static page creation fails.
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
