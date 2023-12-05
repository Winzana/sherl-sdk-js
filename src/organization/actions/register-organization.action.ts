import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationRequest } from '../types';

/**
 * Registers a new organization with the provided request details.
 *
 * This function sends a POST request to register a new organization using the details provided in the
 * IRegisterOrganizationRequest object. On successful registration, it returns the newly registered
 * organization's information encapsulated in an IOrganizationResponse object. If the registration process
 * encounters any errors, such as a non-201 status response or connectivity issues, a specific error
 * indicating the failure of the organization registration is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IRegisterOrganizationRequest} request - The registration request details for the new organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the newly registered organization.
 * @throws {OrganizationErr.REGISTER_ORGANIZATION_FAILED} Throws an error if the organization registration fails.
 */

export const registerOrganization = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.REGISTER_ORGANIZATION,
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.REGISTER_ORGANIZATION_FAILED);
  }

  return response.data;
};
