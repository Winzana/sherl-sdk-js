import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const enableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.ENABLE_ROAMING, {
        organizationId,
      }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.ENABLE_ROAMING_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.ENABLE_ROAMING_FAILED),
    );
    throw filteredError;
  }
};
