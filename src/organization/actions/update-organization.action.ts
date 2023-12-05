import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationDto, IOrganizationResponse } from '../types';

/**
 * Updates an existing organization's details using the provided information.
 *
 * This function sends a PUT request to update an organization identified by its unique ID with the new details
 * provided in the IUpdateOrganizationDto object. On successful update, it returns the updated organization's
 * information encapsulated in an IOrganizationResponse object. If the update process encounters any errors,
 * such as a non-200 status response or connectivity issues, a specific error indicating the failure of the
 * organization update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to be updated.
 * @param {IUpdateOrganizationDto} updatedOrganization - The new details for updating the organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information.
 * @throws {OrganizationErr.UPDATE_ORGANIZATION_FAILED} Throws an error if the organization update fails.
 */

export const updateOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
  updatedOrganization: IUpdateOrganizationDto,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.put<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.UPDATE_ORGANIZATION, {
      organizationId,
    }),
    updatedOrganization,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
