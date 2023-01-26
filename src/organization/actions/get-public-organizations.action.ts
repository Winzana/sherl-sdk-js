import { Fetcher, Pagination } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';

export const getPublicOrganizations = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOrganizationResponse[]>> => {
  const response = await fetcher.get<Pagination<IOrganizationResponse[]>>(
    endpoints.GET_PUBLIC_ORGANIZATIONS,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
