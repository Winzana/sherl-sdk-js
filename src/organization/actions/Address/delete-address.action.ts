import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteAddressResponse, IAddressRequest } from '../../types';

export const deleteAddress = async (
  fetcher: Fetcher,
  request: IAddressRequest,
): Promise<IDeleteAddressResponse> => {
  const response = await fetcher.post<IAddressRequest>(
    endpoints.DELETE_ADDRESS,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_ADDRESS_FAILED);
  }

  return response.data;
};
