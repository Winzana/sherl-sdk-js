import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationRequest, IOrganization } from '../types';

export const updateOrganization = async (
  fetcher: Fetcher,
  request: IUpdateOrganizationRequest,
): Promise<IOrganization> => {
  const response = await fetcher.put<IUpdateOrganizationRequest>(
    endpoints.UPDATE_ORGANIZATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
