import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ADDRESS_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED),
    );
  }
};
