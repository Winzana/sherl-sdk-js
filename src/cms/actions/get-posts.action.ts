import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';
import { getSherlError } from '../../common/utils';

/**
 * Get a list of articles based on filters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - Filters to apply when retrieving articles.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing articles.
 */
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
      case 403:
        throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED_POSTS_FORBIDDEN);
      default:
        throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED),
    );
  }
};
