import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
      default:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(
        OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
      ),
    );
  }
};
