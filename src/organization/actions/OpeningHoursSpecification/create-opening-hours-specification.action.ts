import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOpeningHoursSpecificationRequest,
  IOrganizationResponse,
} from '../../types';

export const createOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  data: IOpeningHoursSpecificationRequest,
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
