import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationMemberInputDto, IFounder } from '../../types';

export const updateFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
  updatedFounder: Partial<IOrganizationMemberInputDto>,
): Promise<IFounder> => {
  try {
    const response = await fetcher.put<IFounder>(
      StringUtils.bindContext(endpoints.UPDATE_FOUNDER, {
        organizationId,
        founderId,
      }),
      updatedFounder,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
  }
};
