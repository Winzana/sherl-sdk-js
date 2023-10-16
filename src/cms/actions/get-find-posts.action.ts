import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';

export const getFindPosts = async (
  fetcher: Fetcher,
  filters: FindPostsFilters,
): Promise<IArticle> => {
  try {
    const response = await fetcher.get<IArticle>(endpoints.GET_FIND_ARTICLE, {
      filters,
    });

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_FIND_POSTS_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_FIND_POSTS_FAILED);
  }
};
