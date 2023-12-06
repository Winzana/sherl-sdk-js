import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOpeningHoursSpecificationInputDto,
  IOrganizationResponse,
} from '../../types';

/**
 * Creates an opening hours specification for a specified organization.
 *
 * This function sends a POST request to set the opening hours for an organization. It requires the organization's
 * unique ID to construct the endpoint and the opening hours details provided in the IOpeningHoursSpecificationInputDto.
 * On successful creation, it returns the updated organization's information encapsulated in an IOrganizationResponse object.
 * If the creation process encounters any errors, such as a non-201 status response or connectivity issues, a specific error
 * indicating the failure of creating the opening hours specification is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the opening hours are being set.
 * @param {IOpeningHoursSpecificationInputDto} data - The details of the opening hours specification to be created.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the opening hours specification.
 * @throws {OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED} Throws an error if the creation of the opening hours specification fails.
 */

export const createOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  data: IOpeningHoursSpecificationInputDto,
): Promise<IOrganizationResponse> => {
  try {
    const response = await fetcher.post<IOrganizationResponse>(
      StringUtils.bindContext(endpoints.CREATE_OPENING_HOURS_SPECIFICATION, {
        organizationId,
      }),
      data,
    );
    if (response.status !== 201) {
      throw errorFactory.create(
        OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
      );
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(
      OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }
};
