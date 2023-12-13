import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOpeningHoursSpecificationInputDto,
  IOrganizationResponse,
} from '../../types';

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
    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(
          OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(
          OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_NOT_FOUND,
        );
      default:
        throw errorFactory.create(
          OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
        );
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(
        OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
      ),
    );
  }
};
