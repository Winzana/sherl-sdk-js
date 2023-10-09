import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { SearchErr, errorFactory } from '../errors';
import { ISearchFilters, ISearchResult } from '../types';

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
  } catch (err) {
    throw errorFactory.create(SearchErr.FETCH_FAILED);
  }
};
