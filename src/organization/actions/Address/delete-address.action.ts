import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes an address from an organization using the specified IDs.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the address is being deleted.
 * @param {string} addressId - The unique identifier of the address to be deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address deletion.
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
