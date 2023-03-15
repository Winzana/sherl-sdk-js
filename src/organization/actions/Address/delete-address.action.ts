import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteAddressResponse, IAddressRequest } from '../../types';

export const deleteAddress = async (
  fetcher: Fetcher,
  addressId: string,
  request: IAddressRequest,
): Promise<IDeleteAddressResponse> => {
  const response = await fetcher.post<IDeleteAddressResponse>(
    StringUtils.bindContext(endpoints.DELETE_ADDRESS, {
      addressId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED);
  }

  return response.data;
};
