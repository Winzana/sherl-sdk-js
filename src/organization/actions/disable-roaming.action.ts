import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IDisableRoamingResponse, IDisableRoamingRequest } from '../types';

export const disableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IDisableRoamingRequest,
): Promise<IDisableRoamingResponse> => {
  const response = await fetcher.post<IDisableRoamingResponse>(
    StringUtils.bindContext(endpoints.DISABLE_ROAMING, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED);
  }

  return response.data;
};
