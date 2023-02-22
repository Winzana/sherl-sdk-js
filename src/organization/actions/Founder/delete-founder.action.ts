import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteFounderResponse, IFounderRequest } from '../../types';

export const deleteFounder = async (
  fetcher: Fetcher,
  request: IFounderRequest,
): Promise<IDeleteFounderResponse> => {
  const response = await fetcher.post<IDeleteFounderResponse>(
    endpoints.DELETE_FOUNDER,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
  }

  return response.data;
};
