import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleFaqCreateInputDto } from '../types';
/**
 * Create a FAQs page in the CMS.
 *
 * This function sends a POST request to create a FAQs page in the CMS
 * using the provided ICMSArticleFaqCreateInputDto object. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleFaqCreateInputDto} data - The data for creating a FAQs page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the created FAQs page information.
 * @throws {CmsErr.CREATE_CMS_FAQS_FAILED_CMS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_CREATE_FAQS_FAILED} Throws an error for other failure scenarios.
 */
export const createFaqsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleFaqCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(endpoints.CREATE_FAQS, data);

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
  }
};
