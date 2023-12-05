import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

/**
 * Retrieves information about a specific organization by its ID.
 *
 * This function sends a GET request to fetch details of an organization based on its unique identifier.
 * The organization ID is used to construct the endpoint for the GET request. If the request is successful,
 * it returns the organization's information encapsulated in an IOrganizationResponse object.
 * In case of any errors, such as a non-200 status response or other issues, a specific error indicating the
 * failure to fetch the organization's information is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to be retrieved.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the specified organization.
 * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the operation to fetch the organization's information fails.
 */

export const getOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION, { organizationId }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }
};
