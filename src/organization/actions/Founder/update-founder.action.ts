import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED),
    );
    throw filteredError;
  }
};
