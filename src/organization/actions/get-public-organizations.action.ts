import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse, OrganizationFiltersDto } from '../types';
import { Pagination } from '../../common/types/response';
import { OrganizationErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves a paginated list of public organizations based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the list of public organizations.
 * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of public organizations.
 */
export const getPublicOrganizations = async (
  fetcher: Fetcher,
  filters: OrganizationFiltersDto,
): Promise<Pagination<IOrganizationResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IOrganizationResponse>>(
      endpoints.GET_PUBLIC_ORGANIZATIONS,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATIONS_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATIONS_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.GET_PUBLIC_ORGANIZATIONS_FAILED),
    );
  }
};
