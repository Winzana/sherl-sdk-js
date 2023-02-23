import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  ICreateOpeningHoursSpecificationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const createOpeningHoursSpecification = async (
  fetcher: Fetcher,
  request: IOpeningHoursSpecificationRequest,
): Promise<ICreateOpeningHoursSpecificationResponse> => {
  const response = await fetcher.post<ICreateOpeningHoursSpecificationResponse>(
    StringUtils.bindContext(endpoints.CREATE_OPENING_HOURS_SPECIFICATION, {
      organizationId: request.organizationId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw new Error('error test');
  }

  return response.data;
};
