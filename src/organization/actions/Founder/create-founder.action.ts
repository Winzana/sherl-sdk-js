import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderResponse, IFounderRequest } from '../../types';

export const createFounder = async (
  fetcher: Fetcher,
  request: IFounderRequest,
): Promise<ICreateFounderResponse> => {
  const response = await fetcher.post<IFounderRequest>(
    endpoints.CREATE_FOUNDER,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
  }

  return response.data;
};
