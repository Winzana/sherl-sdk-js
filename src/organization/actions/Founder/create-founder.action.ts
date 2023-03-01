import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderResponse, ICreateFounderRequest } from '../../types';

export const createFounder = async (
  fetcher: Fetcher,
  id: string,
  request: ICreateFounderRequest,
): Promise<ICreateFounderResponse> => {
  const response = await fetcher.post<ICreateFounderResponse>(
    StringUtils.bindContext(endpoints.CREATE_FOUNDER, {
      id,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
  }

  return response.data;
};
