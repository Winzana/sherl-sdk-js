import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleFaqCreateInputDto } from '../types';

export const createFaqsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleFaqCreateInputDto,
) => {
  try {
    const response = await fetcher.post<ICMSArticleFaqCreateInputDto>(
      endpoints.CREATE_FAQS,
      data,
    );

    if (response.status !== 201) {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAQS_FAILED);
  }
};
