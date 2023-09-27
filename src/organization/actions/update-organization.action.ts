import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationRequest, IOrganizationResponse } from '../types';

export const updateOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IUpdateOrganizationRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.put<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.UPDATE_ORGANIZATION, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
