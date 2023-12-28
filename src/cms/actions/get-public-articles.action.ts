import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';
import { getSherlError } from '../../common/utils';

/**
 * Get a list of public articles based on filters.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - Filters to apply when retrieving public articles.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing public articles.
 */
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED_POSTS_FORBIDDEN,
        );
      default:
        throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED),
    );
  }
};
