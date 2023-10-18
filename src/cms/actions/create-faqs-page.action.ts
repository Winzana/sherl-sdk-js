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

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
  }
};
