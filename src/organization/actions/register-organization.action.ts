import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationRequest } from '../types';

/**
 * Registers a new organization with the provided request details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IRegisterOrganizationRequest} request - The registration request details for the new organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the information of the newly registered organization.
 */
export const registerOrganization = async (
  fetcher: Fetcher,
  request: IRegisterOrganizationRequest,
): Promise<IOrganizationResponse> => {
  const response = await fetcher.post<IOrganizationResponse>(
    endpoints.REGISTER_ORGANIZATION,
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.REGISTER_ORGANIZATION_FAILED);
  }

  return response.data;
};
