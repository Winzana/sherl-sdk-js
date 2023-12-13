import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationDto, IOrganizationResponse } from '../types';

export const updateOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
  updatedOrganization: IUpdateOrganizationDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.put<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.UPDATE_ORGANIZATION, {
        organizationId,
      }),
      updatedOrganization,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.UPDATE_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          OrganizationErr.UPDATE_ORGANIZATION_NOT_FOUND,
        );
      default:
        throw errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.FETCH_FAILED),
    );
  }
};
