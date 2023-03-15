import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IEnableRoamingResponse } from '../types';

export const enableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IEnableRoamingResponse> => {
  const response = await fetcher.post<IEnableRoamingResponse>(
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
