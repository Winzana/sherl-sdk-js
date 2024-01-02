import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes the logo of an organization specified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose logo is being deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the logo deletion.
 */
export const deleteLogo = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DELETE_LOGO, {
        organizationId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_LOGO_FAILED);
  }
};
