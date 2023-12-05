import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';
import { OrganizationErr, errorFactory } from '../errors';

/**
 * Retrieves public information about an organization using its unique ID.
 *
 * This function sends a GET request to fetch public-facing details of an organization based on its unique identifier.
 * The organization ID is used to construct the endpoint for the GET request. If the request is successful, it returns
 * the organization's public information encapsulated in an IOrganizationResponse object. In case of any
 * errors, such as a non-200 status response or other issues, a specific error indicating the failure to fetch
 * the organization's information is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the public organization to be retrieved.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
 * @throws {OrganizationErr.FETCH_FAILED} Throws an error if the operation to fetch the organization's information fails.
 */

export const getPublicOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, {
        organizationId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }
};
