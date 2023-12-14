import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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

    if (response.status === 403) {
      throw errorFactory.create(SearchErr.SEARCH_FORBIDDEN);
    }

    return response.data;
  } catch (err) {
    throw getSherlError(err, errorFactory.create(SearchErr.FETCH_FAILED));
  }
};
