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
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization for which the opening hours are being set.
 * @param {IOpeningHoursSpecificationInputDto} data - The details of the opening hours specification to be created.
 * @returns {Promise<IOrganizationResponse>} A promise that resolves to the updated organization's information after creating the opening hours specification.
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
