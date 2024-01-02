import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IFounder } from '../../types';

/**
 * Deletes a founder record from a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the founder is being deleted.
 * @param {string} founderId - The unique identifier of the founder to be deleted.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the deleted founder.
 */
export const deleteFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
): Promise<IFounder> => {
  try {
    const response = await fetcher.delete<IFounder>(
      StringUtils.bindContext(endpoints.DELETE_FOUNDER, {
        organizationId,
        founderId,
      }),
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
  }
};
