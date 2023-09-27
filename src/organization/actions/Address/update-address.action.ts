import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

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
