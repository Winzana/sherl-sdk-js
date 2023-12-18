import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';

/**
 * Get a list of articles based on filters.
 *
 * This function sends a GET request to retrieve a list of articles in the CMS
 * based on the provided filters. It handles different
 * HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - Filters to apply when retrieving articles.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to a search result containing articles.
 * @throws {CmsErr.CMS_GET_POSTS_FAILED_POSTS_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {CmsErr.CMS_GET_POSTS_FAILED} Throws an error for other failure scenarios.
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

    if (response.status !== 200) {
      throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(CmsErr.CMS_GET_POSTS_FAILED);
  }
};
