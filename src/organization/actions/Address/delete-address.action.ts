import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_ADDRESS, {
        organizationId,
        addressId,
      }),
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADDRESS_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED),
        );
    }
  }
};
