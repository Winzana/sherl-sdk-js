import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

export const deleteAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  addressId: string,
  request: IAddressRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.delete<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.MANAGE_ADDRESS, {
      organizationId,
      addressId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED);
  }

  return response.data;
};
