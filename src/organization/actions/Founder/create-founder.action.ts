import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateFounderRequest, IFounder } from '../../types';

export const createFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  request: ICreateFounderRequest,
): Promise<IFounder> => {
  try {
    const response = await fetcher.post<IFounder>(
      StringUtils.bindContext(endpoints.CREATE_FOUNDER, {
        organizationId,
      }),
      request,
    );
    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_FOUNDER_FAILED);
  }
};
