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
   * This function sends a GET request to fetch communication records. The filters, encapsulated
   * within the ICommunicationFindByInputDto object, determine the criteria for selecting records.
   * It returns a search result object containing the list of communications that match the criteria.
   * If the request fails, it throws an error with a specific code indicating the failure in fetching
   * the communication records.
   *
   * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
   * @param {ICommunicationFindByInputDto} [filters] - Optional filters to apply when fetching communication records.
   * @returns {Promise<ISearchResult<ICommunication>>} A promise that resolves to a search result object containing the communication records.
   * @throws {CommunicationErr.FETCH_FAILED} Throws an error if the fetching of communication records fails.
   */
  public getCommunication = this.withFetcher(getCommunication);
}

export { CommunicationProvider };
