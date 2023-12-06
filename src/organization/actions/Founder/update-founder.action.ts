import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationMemberInputDto, IFounder } from '../../types';

/**
 * Updates the details of a founder within a specified organization.
 *
 * This function sends a PUT request to modify the details of an existing founder in an organization.
 * It requires the organization's unique ID and the founder's unique ID to construct the endpoint for the request.
 * The updated founder details are provided in a Partial<IOrganizationMemberInputDto> object. On successful update,
 * it returns the information of the updated founder encapsulated in an IFounder object. If the update process
 * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
 * the failure of the founder update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the founder belongs.
 * @param {string} founderId - The unique identifier of the founder to be updated.
 * @param {Partial<IOrganizationMemberInputDto>} updatedFounder - The partial data of the founder to be updated.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the updated founder.
 * @throws {OrganizationErr.UPDATE_FOUNDER_FAILED} Throws an error if the founder update fails.
 */

export const updateFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
  updatedFounder: Partial<IOrganizationMemberInputDto>,
): Promise<IFounder> => {
  try {
    const response = await fetcher.put<IFounder>(
      StringUtils.bindContext(endpoints.UPDATE_FOUNDER, {
        organizationId,
        founderId,
      }),
      updatedFounder,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
  }
};
