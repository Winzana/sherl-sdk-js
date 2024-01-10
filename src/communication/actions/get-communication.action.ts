import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
  try {
    const response = await fetcher.get<ISearchResult<ICommunication>>(
      endpoints.GET_COMMUNICATION_BY_ORGANIZATION_ID,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(CommunicationErr.FETCH_FORBIDDEN);
      case 404:
        throw errorFactory.create(CommunicationErr.NOT_FOUND);
      default:
        throw errorFactory.create(CommunicationErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(CommunicationErr.FETCH_FAILED),
    );
  }
};
