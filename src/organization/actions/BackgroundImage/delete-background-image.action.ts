import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes the background image of an organization identified by its unique ID.
 *
 * This function sends a DELETE request to remove the background image of an organization. The organization's
 * unique ID is used to construct the endpoint for the request. On successful deletion, it returns the updated
 * organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
 * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure
 * of the background image deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose background image is being deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the background image deletion.
 * @throws {OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED} Throws an error if the background image deletion fails.
 */

export const deleteBackgroundImage = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_BACKGROUND_IMAGE, {
        organizationId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_BACKGROUND_IMAGE_FAILED);
  }
};
