import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleStaticPageCreateInputDto } from '../types';

export const createStaticPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStaticPageCreateInputDto,
) => {
  const response = await fetcher
    .post<string>(endpoints.CMS_CREATE_STATIC, data)
    .catch(() => {
      throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
  }
  return response.data;
};
