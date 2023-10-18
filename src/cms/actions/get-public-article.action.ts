import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { StringUtils } from '../../common/utils/string';
import { ISearchResult } from '../../common';

export const getPublicArticles = async (
  fetcher: Fetcher,
  filters: FindPostsFilters,
): Promise<ISearchResult<IArticle>> => {
  try {
    const response = await fetcher.get<ISearchResult<IArticle>>(
      endpoints.GET_PUBLIC_ARTICLES,
      {
        ...filters,
      },
    );

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED);
  }
};
