import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(
            OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
          ),
        );
    }
  }
};
