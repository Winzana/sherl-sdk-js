import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationRequest, IOrganization } from '../types';

export const updateOrganization = async (
  fetcher: Fetcher,
  id: string,
  request: IUpdateOrganizationRequest,
): Promise<IOrganization> => {
  const response = await fetcher.put<IOrganization>(
    StringUtils.bindContext(endpoints.UPDATE_ORGANIZATION, {
      id,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED);
  }

  return response.data;
};
