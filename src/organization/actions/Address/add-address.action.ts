import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

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
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_NOT_FOUND);
      case 409:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_ALREADY_EXISTS);
      default:
        throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED),
    );
    throw filteredError;
  }
};
