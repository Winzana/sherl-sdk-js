import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED),
    );
  }
};
