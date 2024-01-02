import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationMemberInputDto, IFounder } from '../../types';

/**
 * Updates the details of a founder within a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the founder belongs.
 * @param {string} founderId - The unique identifier of the founder to be updated.
 * @param {Partial<IOrganizationMemberInputDto>} updatedFounder - The partial data of the founder to be updated.
 * @returns {Promise<IFounder>} A promise that resolves to the information of the updated founder.
 */
export const updateFounder = async (
  fetcher: Fetcher,
  organizationId: string,
  founderId: string,
  updatedFounder: Partial<IOrganizationMemberInputDto>,
): Promise<IFounder> => {
  try {
    const response = await fetcher.put<IFounder>(
      StringUtils.bindContext(endpoints.UPDATE_FOUNDER, {
        organizationId,
        founderId,
      }),
      updatedFounder,
    );

    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_FOUNDER_FAILED);
  }
};
