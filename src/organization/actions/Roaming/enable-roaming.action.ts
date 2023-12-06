import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Enables the roaming feature for a specified organization.
 *
 * This function sends a POST request to enable the roaming feature within an organization. It uses the
 * organization's unique ID to construct the endpoint for the request. On successful operation, it returns the
 * updated organization's information encapsulated in an IOrganizationResponse object. If the process of
 * enabling roaming encounters any errors, such as a non-200 status response or connectivity issues, a specific
 * error indicating the failure of the operation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which roaming is being enabled.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after enabling roaming.
 * @throws {OrganizationErr.ENABLE_ROAMING_FAILED} Throws an error if the operation to enable roaming fails.
 */

export const enableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.ENABLE_ROAMING, {
      organizationId,
    }),
    {},
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_FAILED);
  }

  return response.data;
};
