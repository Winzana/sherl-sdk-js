import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IUpdateOpeningHoursSpecificationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const updateOpeningHoursSpecification = async (
  fetcher: Fetcher,
  request: IOpeningHoursSpecificationRequest,
): Promise<IUpdateOpeningHoursSpecificationResponse> => {
  const response = await fetcher.put<IUpdateOpeningHoursSpecificationResponse>(
    endpoints.UPDATE_OPENING_HOURS_SPECIFICATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.UPDATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
