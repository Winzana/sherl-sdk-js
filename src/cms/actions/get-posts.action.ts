import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';

export const getPosts = async (
  fetcher: Fetcher,
  filters: FindPostsFilters,
): Promise<ISearchResult<IArticle>> => {
  try {
    const response = await fetcher.get<ISearchResult<IArticle>>(
      endpoints.MANAGE_ARTICLES,
      {
        ...filters,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 404:
        throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED_POSTS_NOT_FOUND);
      default:
        throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED);
  }
};
