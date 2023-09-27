import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IAddressRequest, IOrganizationResponse } from '../../types';

export const addAddress = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddressRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.ADD_ADDRESS, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.ADD_ADDRESS_FAILED);
  }

  return response.data;
};
