import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IOrganizationResponse, ICreateOrganizationInputDto } from '../types';

/**
 * Creates a new organization with the given details.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {ICreateOrganizationInputDto} organization - The data for creating a new organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the newly created organization's information.
 */
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
      default:
        throw errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_ORGANIZATION_FAILED),
    );
  }
};
