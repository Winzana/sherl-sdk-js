import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

export const disableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DISABLE_ROAMING, {
        organizationId,
      }),
      {},
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ROAMING_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED),
    );
  }
};
