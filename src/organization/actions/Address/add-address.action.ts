import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddAddressResponse, IAddressRequest } from '../../types';

export const addAddress = async (
  fetcher: Fetcher,
  request: IAddressRequest,
): Promise<IAddAddressResponse> => {
  const response = await fetcher.post<IAddressRequest>(
    endpoints.ADD_ADDRESS,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED);
  }

  return response.data;
};
