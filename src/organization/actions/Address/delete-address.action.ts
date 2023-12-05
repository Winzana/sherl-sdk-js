import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes an address from an organization using the specified IDs.
 *
 * This function sends a DELETE request to remove an address from an organization. It requires both the organization's
 * unique ID and the address's unique ID to construct the endpoint for the request. On successful deletion, it returns
 * the updated organization's information encapsulated in an IOrganizationResponse object. If the deletion process encounters
 * any errors, such as a non-200 status response or connectivity issues, a specific error indicating the failure of the
 * address deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the address is being deleted.
 * @param {string} addressId - The unique identifier of the address to be deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address deletion.
 * @throws {OrganizationErr.DELETE_ADDRESS_FAILED} Throws an error if the address deletion fails.
 */

export const deleteAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  addressId: string,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.delete<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.MANAGE_ADDRESS, {
      organizationId,
      addressId,
    }),
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED);
  }

  return response.data;
};
