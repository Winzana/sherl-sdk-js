import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateFounderResponse, IUpdateFounderRequest } from '../../types';

export const updateFounder = async (
  fetcher: Fetcher,
  id: string,
  founderId: string,
  request: IUpdateFounderRequest,
): Promise<IUpdateFounderResponse> => {
  const response = await fetcher.put<IUpdateFounderResponse>(
    StringUtils.bindContext(endpoints.UPDATE_FOUNDER, {
      id,
      founderId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
  }

  return response.data;
};
