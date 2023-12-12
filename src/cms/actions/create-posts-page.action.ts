import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { IArticle, ICMSArticleCreateInputDto } from '../types';

export const createPostsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleCreateInputDto,
): Promise<IArticle> => {
  try {
    const response = await fetcher.post<IArticle>(
      endpoints.MANAGE_ARTICLES,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(CmsErr.CREATE_CMS_POSTS_FAILED_CMS_FORBIDDEN);
      case 404:
        throw errorFactory.create(CmsErr.CREATE_CMS_POSTS_FAILED_CMS_NOT_FOUND);
      case 409:
        throw errorFactory.create(
          CmsErr.CMS_CREATE_POSTS_FAILED_POST_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
    }
  } catch (err) {
    throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
  }
};
