import { SherlClient } from '../common';
import { AbstractProvider } from '../common/provider';
import { getCommunication } from './actions';
import { errorFactory } from './errors';

class CommunicationProvider extends AbstractProvider {
  constructor(client: SherlClient) {
    super(client, errorFactory);
  }

  /**
   * Retrieves communication records based on the provided filters.
   *
   * @param {ICommunicationFindByInputDto} [filters] - Optional filters to apply when fetching communication records.
   * @returns {Promise<ISearchResult<ICommunication>>} A promise that resolves to a search result object containing the communication records.
   * @throws {CommunicationErr.FETCH_FAILED} Throws an error if the fetching of communication records fails.
   * @see {@link https://winzana.github.io/sherl-sdk-js/docs/communication#get-communication Sherl SDK documentation} for further information
   */
  public getCommunication = this.withFetcher(getCommunication);
}

export { CommunicationProvider };
