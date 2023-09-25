import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse, OrganizationFiltersDto } from '../types';
import { Pagination } from '../../common/types/response';

export const getOrganizations = async (
  fetcher: Fetcher,
  filters: OrganizationFiltersDto,
): Promise<Pagination<IOrganizationResponse>> => {
  const response = await fetcher.get<Pagination<IOrganizationResponse>>(
    endpoints.GET_ORGANIZATIONS,
    filters,
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
