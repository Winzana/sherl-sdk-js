import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateIsPublicOrganizationRequest, IOrganization } from '../types';

export const updateOrganization = async (
  fetcher: Fetcher,
  request: IUpdateIsPublicOrganizationRequest,
): Promise<IOrganization> => {
  const response = await fetcher.put<IUpdateIsPublicOrganizationRequest>(
    endpoints.UPDATE_IS_PUBLIC_ORGANIZATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_IS_PUBLIC_ORGANIZATION_FAILED,
    );
  }

  return response.data;
};
