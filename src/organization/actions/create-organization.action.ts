import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganization, ICreateOrganizationRequest } from '../types';

export const createOrganization = async (
  fetcher: Fetcher,
  request: ICreateOrganizationRequest,
): Promise<IOrganization> => {
  const response = await fetcher.post<IOrganization>(
    endpoints.CREATE_ORGANIZATION,
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
