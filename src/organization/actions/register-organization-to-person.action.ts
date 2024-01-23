import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, IRegisterOrganizationToPerson } from '../types';

/**
 * Registers an organization to a person using the provided data.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IRegisterOrganizationToPerson} organizationToPerson - The data for registering an organization to a person.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the organization's information post-registration.
 */
export const registerOrganizationToPerson = async (
  fetcher: Fetcher,
  organizationToPerson: IRegisterOrganizationToPerson,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      endpoints.REGISTER_ORGANIZATION_TO_PERSON,
      organizationToPerson,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          OrganizationErr.REGISTER_ORGANIZATION_TO_PERSON_FAILED,
        );
    }
  }
};
