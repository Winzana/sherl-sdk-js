import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteFounderResponse } from '../../types';

export const deleteFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
): Promise<IDeleteFounderResponse> => {
  const response = await fetcher.post<IDeleteFounderResponse>(
    StringUtils.bindContext(endpoints.DELETE_FOUNDER, {
      organizationId,
      founderId,
    }),
    {},
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
  }

  return response.data;
};
