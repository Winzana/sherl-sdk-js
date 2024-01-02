import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

/**
 * Updates an address of an organization specified by IDs.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose address is being updated.
 * @param {string} addressId - The unique identifier of the address to be updated.
 * @param {IAddressRequest} request - The updated address details.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the address update.
 */
export const updateAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  addressId: string,
  request: IAddressRequest,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.put<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_ADDRESS, {
        organizationId,
        addressId,
      }),
      request,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.UPDATE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADDRESS_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.UPDATE_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.UPDATE_ADDRESS_FAILED),
    );
  }
};
