import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationToPerson } from '../types';

/**
 * Registers an organization to a person using the provided data.
 *
 * This function sends a POST request to associate an organization with a person. The association details are provided
 * in the IRegisterOrganizationToPerson object. On successful registration, it returns the organization's information
 * encapsulated in an IOrganizationResponse object. If the registration process encounters any errors, such as a
 * non-200 status response or connectivity issues, a specific error indicating the failure of the registration operation
 * is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IRegisterOrganizationToPerson} organizationToPerson - The data for registering an organization to a person.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the organization's information post-registration.
 * @throws {OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED} Throws an error if the registration operation fails.
 */

export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  organizationToPerson: IRegisterOrganizationToPerson,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.REGISTER_ORGANIZATION_TO_PERSON,
    organizationToPerson,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
    );
  }

  return response.data;
};
