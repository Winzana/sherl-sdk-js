import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IAddRibBody, IRib } from '../../../shop/types';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';

/**
 * Adds a RIB to a specified organization.
 *
 * This function sends a POST request to add a RIB to an organization. It requires the organization's
 * unique ID to construct the endpoint. The RIB details are provided in the IAddRibBody object. On successful
 * addition, it returns the newly added RIB's information encapsulated in an IRib object. If the addition process
 * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
 * the failure of the RIB addition is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the RIB is being added.
 * @param {IAddRibBody} request - The details of the RIB to be added.
 * @returns {Promise<IRib>} A promise that resolves to the information of the newly added RIB.
 * @throws {OrganizationErr.ADD_RIB_FAILED} Throws an error if the RIB addition fails.
 */

export const addRib = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IAddRibBody,
): Promise<IRib> => {
  try {
    const response = await fetcher.post<IRib>(
      StringUtils.bindContext(endpoints.ADD_RIB, {
        organizationId,
      }),
      request,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.ADD_RIB_FAILED);
  }
};
