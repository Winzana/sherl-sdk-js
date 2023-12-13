import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { CommunicationErr, errorFactory } from '../errors';
import { ICommunication, ICommunicationFindByInputDto } from '../types';

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
    const sherlError = getSherlError(
      error,
      errorFactory.create(CommunicationErr.FETCH_FAILED),
    );
    throw sherlError;
  }
};
