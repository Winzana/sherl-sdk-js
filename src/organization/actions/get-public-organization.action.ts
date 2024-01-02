import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IOrganizationResponse } from '../types';
import { OrganizationErr, errorFactory } from '../errors';

/**
 * Retrieves public information about an organization using its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the public organization to be retrieved.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the public information of the specified organization.
 */
export const getPublicOrganization = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.get<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_ORGANIZATION_ID, {
        organizationId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.FETCH_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }
};
