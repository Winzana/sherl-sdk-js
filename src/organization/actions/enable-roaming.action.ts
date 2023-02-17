import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IEnableRoamingResponse, IEnableRoamingRequest } from '../types';

export const enableRoaming = async (
  fetcher: Fetcher,
  request: IEnableRoamingRequest,
): Promise<IEnableRoamingResponse> => {
  const response = await fetcher.post<IEnableRoamingRequest>(
    endpoints.ENABLE_ROAMING,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_FAILED);
  }

  return response.data;
};
