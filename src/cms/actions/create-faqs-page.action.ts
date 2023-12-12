import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleFaqCreateInputDto } from '../types';

export const createFaqsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleFaqCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(endpoints.CREATE_FAQS, data);

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_FAQS_FAILED_CMS_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.CREATE_CMS_FAQS_FAILED_CMS_NOT_EXIST);
      case 409:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_FAQS_FAILED_FAQS_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
  }
};
