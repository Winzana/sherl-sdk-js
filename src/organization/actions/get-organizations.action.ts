import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse, OrganizationFiltersDto } from '../types';
import { Pagination } from '../../common/types/response';
import { OrganizationErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

export const getOrganizations = async (
  fetcher: Fetcher,
  filters: OrganizationFiltersDto,
): Promise<Pagination<IOrganizationResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IOrganizationResponse>>(
      endpoints.GET_ORGANIZATIONS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.FECTH_FORBIDDEN);
      default:
        throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.FETCH_FAILED),
    );
  }
};
