import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOrganizationResponse,
  IOpeningHoursSpecificationInputDto,
} from '../../types';

/**
 * Updates an opening hours specification for a specified organization.
 *
 * This function sends a PUT request to modify an existing opening hours specification of an organization. It uses the
 * organization's unique ID and the opening hours specification's unique ID to construct the endpoint for the request.
 * The updated opening hours details are provided in the IOpeningHoursSpecificationInputDto object. On successful update,
 * it returns the updated organization's information encapsulated in an IOrganizationResponse object. If the update process
 * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure
 * of updating the opening hours specification is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose opening hours specification is being updated.
 * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be updated.
 * @param {IOpeningHoursSpecificationInputDto} data - The updated opening hours details.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the update of the opening hours specification.
 * @throws {OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the update of the opening hours specification fails.
 */

export const updateOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
  data: IOpeningHoursSpecificationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.put<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
        hoursSpecId,
      }),
      data,
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
      );
    }

    return response.data;
  } catch (err) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }
};
