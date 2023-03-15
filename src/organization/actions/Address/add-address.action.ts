import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddAddressResponse, IAddressRequest } from '../../types';

export const addAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddressRequest,
): Promise<IAddAddressResponse> => {
  const response = await fetcher.post<IAddAddressResponse>(
    StringUtils.bindContext(endpoints.ADD_ADDRESS, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED);
  }

  return response.data;
};
