import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOrganizationResponse,
  IOpeningHoursSpecificationInputDto,
} from '../../types';

/**
 * Updates an opening hours specification for a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization whose opening hours specification is being updated.
 * @param {string} hoursSpecId - The unique identifier of the opening hours specification to be updated.
 * @param {IOpeningHoursSpecificationInputDto} data - The updated opening hours details.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after the update of the opening hours specification.
 */
export const updateOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
  data: IOpeningHoursSpecificationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.put<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.MANAGE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
        hoursSpecId,
      }),
      data,
    );

    if (response.status !== 200) {
      throw errorFactory.create(
        OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
      );
    }

    return response.data;
  } catch (err) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }
};
