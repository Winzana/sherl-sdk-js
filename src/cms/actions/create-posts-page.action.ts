import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { ICMSArticleCreateInputDto } from '../types';

export const createPostsPage = async (
  fetcher: Fetcher,
  data: ICMSArticleCreateInputDto,
) => {
  const response = await fetcher
    .post<ICMSArticleCreateInputDto>(endpoints.CREATE_POSTS, data)
    .catch(() => {
      throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
    });
  if (response.status !== 201) {
    throw errorFactory.create(CmsErr.CMS_CREATE_POSTS_FAILED);
  }
  return response.data;
};
