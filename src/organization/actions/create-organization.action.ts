import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IOrganization } from '../types';

export const createOrganization = async (
  fetcher: Fetcher,
  request: IOrganization,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.CREATE_ORGANIZATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
