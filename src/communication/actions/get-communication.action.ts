import { SherlError } from '../../common';
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
      endpoints.FIND_COMMUNICATIONS,
      filters,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          CommunicationErr.FIND_COMMUNICATION_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(CommunicationErr.FIND_COMMUNICATION_FAILED),
        );
    }
  }
};
