import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IFounder } from '../../types';

/**
 * Deletes a founder record from a specified organization.
 *
 * This function sends a DELETE request to remove a founder from an organization. It uses the organization's unique ID
 * and the founder's unique ID to construct the endpoint for the request. On successful deletion, it returns the information
 * of the deleted founder encapsulated in an IFounder object. If the deletion process encounters any errors, such as
 * a non-200 status response or connectivity issues, a specific error indicating the failure of the founder deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the founder is being deleted.
 * @param {string} founderId - The unique identifier of the founder to be deleted.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the deleted founder.
 * @throws {OrganizationErr.DELETE_FOUNDER_FAILED} Throws an error if the founder deletion fails.
 */

export const deleteFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
): Promise<IFounder> => {
  try {
    const response = await fetcher.delete<IFounder>(
      StringUtils.bindContext(endpoints.DELETE_FOUNDER, {
        organizationId,
        founderId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
  }
};
