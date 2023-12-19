import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IOrganizationResponse } from '../../types';

/**
 * Deletes an opening hours specification from a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the opening hours specification is being deleted.
 * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be deleted.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the deletion of the opening hours specification.
 */
export const deleteOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.delete<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
        hoursSpecId,
      }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
      );
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(
      OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }
};
