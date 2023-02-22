import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateFounderResponse, IFounderRequest } from '../../types';

export const updateFounder = async (
  fetcher: Fetcher,
  request: IFounderRequest,
): Promise<IUpdateFounderResponse> => {
  const response = await fetcher.put<IUpdateFounderResponse>(
    endpoints.UPDATE_FOUNDER,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
  }

  return response.data;
};
