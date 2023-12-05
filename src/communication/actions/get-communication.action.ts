import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CommunicationErr, errorFactory } from '../errors';
import { ICommunication, ICommunicationFindByInputDto } from '../types';

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

export const getCommunication = async (
  fetcher: Fetcher,
  filters?: ICommunicationFindByInputDto,
): Promise<ISearchResult<ICommunication>> => {
  const response = await fetcher.get<ISearchResult<ICommunication>>(
    endpoints.GET_COMMUNICATION_BY_ORGANIZATION_ID,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(CommunicationErr.FETCH_FAILED);
  }

  return response.data;
};
