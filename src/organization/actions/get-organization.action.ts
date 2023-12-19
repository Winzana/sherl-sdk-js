import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse } from '../types';

export const getOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_ORGANIZATION, { organizationId }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.FECTH_FORBIDDEN);
      default:
        throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.FETCH_FAILED),
    );
  }
};
