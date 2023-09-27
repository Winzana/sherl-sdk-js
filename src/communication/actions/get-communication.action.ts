import { ISearchResult } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CommunicationErr, errorFactory } from '../errors';
import { ICommunication, ICommunicationFindByInputDto } from '../types';

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
