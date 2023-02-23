import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationRequest } from '../types';

export const registerOrganization = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.REGISTER_ORGANIZATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.REGISTER_ORGANIZATION_FAILED);
  }

  return response.data;
};
