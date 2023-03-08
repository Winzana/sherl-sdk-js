import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateIsPublicOrganizationRequest, IOrganization } from '../types';

export const updateIsPublicOrganization = async (
  fetcher: Fetcher,
  id: string,
  request: IUpdateIsPublicOrganizationRequest,
): Promise<IOrganization> => {
  const response = await fetcher.put<IOrganization>(
    StringUtils.bindContext(endpoints.UPDATE_IS_PUBLIC_ORGANIZATION, {
      id,
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
