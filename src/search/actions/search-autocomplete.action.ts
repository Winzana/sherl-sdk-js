import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { SearchErr, errorFactory } from '../errors';
import { ISearchFilters, ISearchResult } from '../types';

/**
 * Fetches autocomplete search results from the public API.
 *
 * @param {Fetcher} fetcher - The object responsible for making HTTP requests.
 * @param {ISearchFilters} filters - Optional filters to apply to the search.
 * @return {Promise<ISearchResult>} The search result data.
 */
export const getPublicSearchAutocomplete = async (
  fetcher: Fetcher,
  filters?: ISearchFilters,
): Promise<ISearchResult> => {
  try {
    const response = await fetcher.get<ISearchResult>(
      endpoints.SEARCH_AUTOCOMPLETE,
      filters,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(SearchErr.GET_PUBLIC_SEARCH_FORBIDDEN);

      default:
        throw getSherlError(
          error,
          getSherlError(
            error,
            errorFactory.create(SearchErr.GET_PUBLIC_SEARCH_FAILED),
          ),
        );
    }
  }
};
