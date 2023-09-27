import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const enableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    StringUtils.bindContext(endpoints.ENABLE_ROAMING, {
      organizationId,
    }),
    {},
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_FAILED);
  }

  return response.data;
};
