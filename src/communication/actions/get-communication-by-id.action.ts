import { Fetcher, Pagination } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ICommunicationFindByInputDto } from '../types';

export const getCommunicationByOrganizationId = async (
  fetcher: Fetcher,
  id: string,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<ICommunicationFindByInputDto[]>> => {
  const response = await fetcher.get<
    Pagination<ICommunicationFindByInputDto[]>
  >(endpoints.GET_COMMUNICATION_BY_ORGANIZATION_ID, {
    id,
    page,
    itemsPerPage,
    ...filters,
  });

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
