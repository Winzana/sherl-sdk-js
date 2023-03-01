import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IOpeningHoursSpecificationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const createOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IOpeningHoursSpecificationRequest,
): Promise<IOpeningHoursSpecificationResponse> => {
  const response = await fetcher.post<IOpeningHoursSpecificationResponse>(
    StringUtils.bindContext(endpoints.CREATE_OPENING_HOURS_SPECIFICATION, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(
      OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
