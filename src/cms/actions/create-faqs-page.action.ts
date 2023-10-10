import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleFaqCreateInputDto } from '../types';

export const createFaqsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleFaqCreateInputDto,
) => {
  const response = await fetcher
    .post<ICMSArticleFaqCreateInputDto>(endpoints.CREATE_FAQS, data)
    .catch(() => {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
  }
  return response.data;
};
