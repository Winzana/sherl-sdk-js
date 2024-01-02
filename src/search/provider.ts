import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getPublicSearchAutocomplete } from './actions/search-autocomplete.action';
import { errorFactory } from './errors';

class SearchProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Fetches autocomplete search results from the public API.
   *
   * @param {ISearchFilters} filters - Optional filters to apply to the search.
   * @return {Promise<ISearchResult>} The search result data.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/search#public-search Sherl SDK documentation} for further information
   */
  getPublicSearchAutocomplete = this.withFetcher(getPublicSearchAutocomplete);
}

export { SearchProvider };
