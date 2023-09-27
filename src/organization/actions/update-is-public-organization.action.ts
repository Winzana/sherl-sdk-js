import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IIsPublicOrganization, IOrganizationResponse } from '../types';

export const updateIsPublicOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IIsPublicOrganization,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.put<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.UPDATE_IS_PUBLIC_ORGANIZATION, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_IS_PUBLIC_ORGANIZATION_FAILED,
    );
  }

  return response.data;
};
