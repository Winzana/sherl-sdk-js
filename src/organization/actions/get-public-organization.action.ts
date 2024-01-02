import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';
import { OrganizationErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

export const getPublicOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, {
        organizationId,
      }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(
          OrganizationErr.GET_PUBLIC_ORGANIZATION_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.GET_PUBLIC_ORGANIZATION_FAILED),
    );
  }
};
