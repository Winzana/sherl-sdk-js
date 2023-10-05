import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IFounder } from '../../types';

export const deleteFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
): Promise<IFounder> => {
  try {
    const response = await fetcher.delete<IFounder>(
      StringUtils.bindContext(endpoints.DELETE_FOUNDER, {
        organizationId,
        founderId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
  }
};
