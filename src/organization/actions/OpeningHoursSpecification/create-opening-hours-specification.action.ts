import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
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
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(OrganizationErr.ORGANIZATION_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(
            OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
          ),
        );
    }
  }
};
