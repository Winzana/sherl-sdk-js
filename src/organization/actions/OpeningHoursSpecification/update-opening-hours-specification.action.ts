import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOrganizationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const updateOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  hoursSpecId: string,
  data: IOpeningHoursSpecificationRequest,
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
