import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.REGISTER_ORGANIZATION,
      request,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.REGISTER_ORGANIZATION_FAILED),
        );
    }
  }
};
