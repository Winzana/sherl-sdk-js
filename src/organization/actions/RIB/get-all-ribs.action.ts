import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IRib } from '../../types';

/**
 * Retrieves all RIBs associated with a specified organization.
 *
 * This function sends a GET request to fetch all RIBs related to an organization. It uses the
 * organization's unique ID to construct the endpoint for the request. On successful retrieval,
 * it returns an array of RIBs, each encapsulated in an IRib object. If the retrieval process
 * encounters any errors, such as a non-200 status response or connectivity issues, a specific error
 * indicating the failure of fetching the RIBs is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the RIBs are being retrieved.
 * @returns {Promise<IRib[]>} A promise that resolves to an array of RIBs for the specified organization.
 * @throws {OrganizationErr.GET_RIBS_FAILED} Throws an error if the retrieval of RIBs fails.
 */

export const getAllRibs = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<IRib[]> => {
  try {
    const response = await fetcher.get<IRib[]>(
      StringUtils.bindContext(endpoints.GET_RIB, { organizationId }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.GET_RIBS_FAILED);
    }

    return response.data;
  } catch {
    throw errorFactory.create(OrganizationErr.FETCH_FAILED);
  }
};
