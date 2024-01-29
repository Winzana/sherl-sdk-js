import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { OrganizationErr, errorFactory } from '../errors';
import { IUpdateOrganizationDto, IOrganizationResponse } from '../types';

/**
 * Updates an existing organization's details using the provided information.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to be updated.
 * @param {IUpdateOrganizationDto} updatedOrganization - The new details for updating the organization.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information.
 */
export const updateOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
  updatedOrganization: IUpdateOrganizationDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.put<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.UPDATE_ORGANIZATION, {
        organizationId,
      }),
      updatedOrganization,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.UPDATE_ORGANIZATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.UPDATE_ORGANIZATION_FAILED),
        );
    }
  }
};
