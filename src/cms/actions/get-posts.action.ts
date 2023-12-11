import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';

/**
 * Retrieves a list of posts from the CMS based on provided filters.
 *
 * This asynchronous function fetches posts from the Content Management System (CMS)
 * using specified filtering criteria. It sends a GET request to the CMS's articles
 * management endpoint with the filters applied as query parameters. Upon successful
 * completion of the request (indicated by a 200 status code), the function returns
 * a search result object containing the filtered list of articles. If any error
 * occurs during the retrieval process, such as a response with a status other
 * than 200 or a connectivity issue, the function throws a specific error indicating
 * the retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - The filtering criteria used to retrieve specific posts.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to the search results containing the filtered articles.
 * @throws {CmsErr.CMS_GET_POSTS_FAILED} Throws an error if the retrieval of posts fails.
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
