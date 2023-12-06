import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes an opening hours specification from a specified organization.
 *
 * This function sends a DELETE request to remove an opening hours specification from an organization. It requires the
 * organization's unique ID and the opening hours specification's unique ID to construct the endpoint for the request.
 * On successful deletion, it returns the updated organization's information encapsulated in an IOrganizationResponse object.
 * If the deletion process encounters any errors, such as a non-200 status response or connectivity issues, a specific error
 * indicating the failure of deleting the opening hours specification is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the opening hours specification is being deleted.
 * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the deletion of the opening hours specification.
 * @throws {OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the deletion of the opening hours specification fails.
 */

export const deleteOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
        hoursSpecId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }
};
