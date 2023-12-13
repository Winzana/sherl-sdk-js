import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ICreateOrganizationInputDto } from '../types';

export const createOrganization = async (
  fetcher: Fetcher,
  organization: ICreateOrganizationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.CREATE_ORGANIZATION,
      organization,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.CREATE_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          OrganizationErr.CREATE_ORGANIZATION_NOT_FOUND,
        );
      case 409:
        throw errorFactory.create(
          OrganizationErr.CREATE_ORGANIZATION_ALREADY_EXISTS,
        );
      default:
        throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED),
    );
  }
};
