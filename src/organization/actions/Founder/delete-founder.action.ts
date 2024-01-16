import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.DELETE_FOUNDER_FAILED),
    );
  }
};
