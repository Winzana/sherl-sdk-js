import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes the logo of an organization specified by its unique ID.
 *
 * This function sends a DELETE request to remove the logo of an organization. The organization's unique ID
 * is used to construct the endpoint for the request. On successful deletion, it returns the updated
 * organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
 * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the
 * failure of the logo deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose logo is being deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo deletion.
 * @throws {OrganizationErr.DELETE_LOGO_FAILED} Throws an error if the logo deletion fails.
 */

export const deleteLogo = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_LOGO, {
        organizationId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
  }
};
