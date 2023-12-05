import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

/**
 * Updates an address of an organization specified by IDs.
 *
 * This function sends a PUT request to update an existing address of an organization. The function requires
 * the organization's unique ID, the address's unique ID, and the updated address details provided in the
 * IAddressRequest object. On successful update, it returns the updated organization's information
 * encapsulated in an IOrganizationResponse object. If the update process encounters any errors, such as
 * a non-200 status response or connectivity issues, a specific error indicating the failure of the address
 * update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose address is being updated.
 * @param {string} addressId - The unique identifier of the address to be updated.
 * @param {IAddressRequest} request - The updated address details.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the address update.
 * @throws {OrganizationErr.UPDATE_ADDRESS_FAILED} Throws an error if the address update fails.
 */

export const updateAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  addressId: string,
  request: IAddressRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.put<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.MANAGE_ADDRESS, {
      organizationId,
      addressId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ADDRESS_FAILED);
  }

  return response.data;
};
