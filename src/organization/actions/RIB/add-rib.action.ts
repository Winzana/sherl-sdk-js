import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IAddRibBody, IRib } from '../../../shop/types';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';

/**
 * Adds a RIB to a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the RIB is being added.
 * @param {IAddRibBody} request - The details of the RIB to be added.
 * @returns {Promise<IRib>} A promise that resolves to the information of the newly added RIB.
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
