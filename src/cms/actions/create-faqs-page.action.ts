import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleFaqCreateInputDto } from '../types';
/**
 * Creates a FAQs page in the CMS.
 *
 * This asynchronous function handles the creation of a FAQs (Frequently Asked Questions) page
 * in the Content Management System (CMS). It sends a POST request to the CMS endpoint designated
 * for creating FAQs, with the provided FAQ data. On a successful request (indicated by a 201 status code),
 * the function returns the data of the newly created FAQs page. If there's an error during the creation
 * process, such as a response with a status other than 201 or a connectivity issue, the function throws
 * a specific error indicating the failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICMSArticleFaqCreateInputDto} data - The data for creating the FAQs page.
 * @returns {Promise<IArticle>} A promise resolving to the data of the created FAQs page.
 * @throws {CmsErr.CMS_CREATE_FAQS_FAILED} Throws an error if the FAQs page creation fails.
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
