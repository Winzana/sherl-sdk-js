import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

/**
 * Adds an address to an organization specified by its ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the address is being added.
 * @param {IAddressRequest} address - The details of the address to be added.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information post address addition.
 */
export const addAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  address: IAddressRequest,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.ADD_ADDRESS, {
        organizationId,
      }),
      address,
    );
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADDRESS_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED),
    );
  }
};
