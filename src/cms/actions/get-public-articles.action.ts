import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CmsErr, errorFactory } from '../errors';
import { FindPostsFilters, IArticle } from '../types';
import { ISearchResult } from '../../common';

/**
 * Retrieves a list of public articles from the CMS based on provided filters.
 *
 * This asynchronous function fetches public articles from the Content Management
 * System (CMS) using specified filtering criteria. It sends a GET request to
 * the CMS's public articles endpoint, applying the filters as query parameters.
 * If the request is successfully executed (indicated by a 200 status code),
 * the function returns a search result object containing the filtered list of
 * public articles. In case of any error, such as a response with a status other
 * than 200 or a connectivity issue, the function throws a specific error indicating
 * the retrieval failure.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {FindPostsFilters} filters - The filtering criteria used to retrieve specific public articles.
 * @returns {Promise<ISearchResult<IArticle>>} A promise that resolves to the search results containing the filtered public articles.
 * @throws {CmsErr.CMS_GET_PUBLIC_ARTICLES_FAILED} Throws an error if the retrieval of public articles fails.
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
