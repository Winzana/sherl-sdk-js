import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationToPerson } from '../types';

export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  organizationToPerson: IRegisterOrganizationToPerson,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.REGISTER_ORGANIZATION_TO_PERSON,
    organizationToPerson,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
    );
  }

  return response.data;
};
