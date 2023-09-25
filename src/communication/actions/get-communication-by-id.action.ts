import { Pagination } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { CommunicationErr, errorFactory } from '../errors';
import { ICommunicationFindByInputDto } from '../types';

export const getCommunicationByOrganizationId = async (
  fetcher: Fetcher,
  organizationId: string,
  filters: { [key: string]: any },
): Promise<Pagination<ICommunicationFindByInputDto>> => {
  const response = await fetcher.get<Pagination<ICommunicationFindByInputDto>>(
    endpoints.GET_COMMUNICATION_BY_ORGANIZATION_ID,
    {
      id: organizationId,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw errorFactory.create(CommunicationErr.FETCH_FAILED);
  }

  return response.data;
};
