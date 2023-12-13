import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationRequest } from '../types';

export const registerOrganization = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationRequest,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.REGISTER_ORGANIZATION,
      request,
    );
    switch (response.status) {
      case 201:
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
    throw filterSherlError(
      error,
      errorFactory.create(
        OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
      ),
    );
  }
};
