import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateAddressResponse, IAddressRequest } from '../../types';

export const updateAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  addressId: string,
  request: IAddressRequest,
): Promise<IUpdateAddressResponse> => {
  const response = await fetcher.put<IUpdateAddressResponse>(
    StringUtils.bindContext(endpoints.UPDATE_ADDRESS, {
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
