import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Disables the roaming feature for a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which roaming is being disabled.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after disabling roaming.
 */
export const disableRoaming = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.DISABLE_ROAMING, {
        organizationId,
      }),
      {},
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DISABLE_ROAMING_FAILED);
  }
};
