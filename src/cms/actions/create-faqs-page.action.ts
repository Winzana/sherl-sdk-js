import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleFaqCreateInputDto } from '../types';
/**
 * Create a FAQs page in the CMS.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {ICMSArticleFaqCreateInputDto} data - The data for creating a FAQs page in the CMS.
 * @returns {Promise<IArticle>} A promise that resolves to the created FAQs page information.
 */
export const createFaqsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleFaqCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(endpoints.CREATE_FAQS, data);

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_FAQS_FAILED_CMS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED),
        );
    }
  }
};
