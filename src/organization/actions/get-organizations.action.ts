import { Pagination } from '../../common/api';
import { IOrganizationResponse } from '../types';
import { OrganizationApi } from '../api/client';

export const getOrganizations = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IOrganizationResponse[]>> => {
  const response = await OrganizationApi.getOrganizations(
    page,
    itemsPerPage,
    filters,
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
