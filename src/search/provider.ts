import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getPublicSearchAutocomplete } from './actions/search-autocomplete.action';
import { errorFactory } from './errors';

class SearchProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  getPublicSearchAutocomplete = this.withFetcher(getPublicSearchAutocomplete);
}

export { SearchProvider };
