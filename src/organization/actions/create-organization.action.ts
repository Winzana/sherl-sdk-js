import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ICreateOrganizationInputDto } from '../types';

/**
 * Creates a new organization with the given details.
 *
 * This function sends a POST request to create a new organization. It uses the data provided in the
 * ICreateOrganizationInputDto object to create the organization. On successful creation, it returns the
 * newly created organization's information encapsulated in an IOrganizationResponse object. If the creation
 * process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
 * indicating the failure of the organization creation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICreateOrganizationInputDto} organization - The data for creating a new organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the newly created organization's information.
 * @throws {OrganizationErr.CREATE_ORGANIZATION_FAILED} Throws an error if the organization creation fails.
 */

export const createOrganization = async (
  fetcher: Fetcher,
  organization: ICreateOrganizationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.CREATE_ORGANIZATION,
      organization,
    );

    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
  }
};
