import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationToPerson } from '../types';

export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  organizationToPerson: IRegisterOrganizationToPerson,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.REGISTER_ORGANIZATION_TO_PERSON,
      organizationToPerson,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_NOT_FOUND,
        );
      case 409:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_ALREADY_EXISTS,
        );
      default:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
        );
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(
        OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
      ),
    );
  }
};
