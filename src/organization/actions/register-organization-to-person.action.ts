import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IRegisterOrganizationToPerson } from '../types';

export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationToPerson,
): Promise<IRegisterOrganizationToPerson> => {
  const response = await fetcher.post<IRegisterOrganizationToPerson>(
    endpoints.REGISTER_ORGANIZATION_TO_PERSON,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
    );
  }

  return response.data;
};
