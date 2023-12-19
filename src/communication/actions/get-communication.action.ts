import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CommunicationErr, errorFactory } from '../errors';
import { ICommunication, ICommunicationFindByInputDto } from '../types';

/**
 * Retrieves communication records based on the provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICommunicationFindByInputDto} [filters] - Optional filters to apply when fetching communication records.
 * @returns {Promise<ISearchResult<ICommunication>>} A promise that resolves to a search result object containing the communication records.
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
