import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IDisableRoamingResponse, IDisableRoamingRequest } from '../types';

export const disableRoaming = async (
  fetcher: Fetcher,
  request: IDisableRoamingRequest,
): Promise<IDisableRoamingResponse> => {
  const response = await fetcher.post<IDisableRoamingResponse>(
    endpoints.DISABLE_ROAMING,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED);
  }

  return response.data;
};
