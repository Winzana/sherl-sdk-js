import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleStaticPageCreateInputDto } from '../types';

export const createStaticPage = async (
  fetcher: Fetcher,
  data: ICMSArticleStaticPageCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.CMS_CREATE_STATIC,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_STATIC_FAILED_CMS_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          CmsErr.CREATE_CMS_STATIC_FAILED_CMS_NOT_FOUND,
        );
      case 409:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_FAILED_STATIC_PAGE_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_FAILED);
  }
};
