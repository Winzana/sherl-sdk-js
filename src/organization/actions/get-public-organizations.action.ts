import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse, OrganizationFiltersDto } from '../types';
import { Pagination } from '../../common/types/response';
import { OrganizationErr, errorFactory } from '../errors';

/**
 * Retrieves a paginated list of public organizations based on provided filters.
 *
 * This function sends a GET request to fetch a list of public-facing organizations, allowing for filtering based on various criteria.
 * The filters are specified through the OrganizationFiltersDto object. It returns a paginated response containing
 * a list of public organizations. If the request fails, it throws an error with a specific code indicating the failure in
 * fetching the organizations.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {OrganizationFiltersDto} filters - The filtering criteria to apply to the list of public organizations.
 * @returns {Promise<Pagination<IOrganizationResponse>>} A promise that resolves to a paginated response containing the list of public organizations.
 * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the fetching of public organizations fails.
 */

export const getPublicOrganizations = async (
  fetcher: Fetcher,
  filters: OrganizationFiltersDto,
): Promise<Pagination<IOrganizationResponse>> => {
  const response = await fetcher.get<Pagination<IOrganizationResponse>>(
    endpoints.GET_PUBLIC_ORGANIZATIONS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }

  return response.data;
};
