import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOpeningHoursSpecificationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const updateOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  id: string,
  request: IOpeningHoursSpecificationRequest,
): Promise<IOpeningHoursSpecificationResponse> => {
  const response = await fetcher.put<IOpeningHoursSpecificationResponse>(
    StringUtils.bindContext(endpoints.UPDATE_OPENING_HOURS_SPECIFICATION, {
      organizationId,
      id,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
