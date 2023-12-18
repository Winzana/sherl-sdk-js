import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';

/**
 * Get a list of public articles based on filters.
 *
 * This function sends a GET request to retrieve a list of public articles in the CMS
 * based on the provided filters. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - Filters to apply when retrieving public articles.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing public articles.
 * @throws {CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED_POSTS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_NOT_FOUND} Throws an error if the CMS is not found (HTTP 404).
 * @throws {CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED} Throws an error for other failure scenarios.
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

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED);
  }
};
