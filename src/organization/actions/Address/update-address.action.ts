import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateAddressResponse, IAddressRequest } from '../../types';

export const updateAddress = async (
  fetcher: Fetcher,
  request: IAddressRequest,
): Promise<IUpdateAddressResponse> => {
  const response = await fetcher.put<IAddressRequest>(
    endpoints.UPDATE_ADDRESS,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ADDRESS_FAILED);
  }

  return response.data;
};
