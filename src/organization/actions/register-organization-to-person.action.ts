import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import {
  IOrganizationResponse,
  IRegisterOrganizationToPersonRequest,
} from '../types';

export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationToPersonRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IRegisterOrganizationToPersonRequest>(
    endpoints.REGISTER_ORGANIZATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.REGISTER_ORGANIZATION_FAILED);
  }

  return response.data;
};
