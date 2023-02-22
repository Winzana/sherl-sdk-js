import { Fetcher } from '../../../common/api';
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
    endpoints.CREATE_OPENING_HOURS_SPECIFICATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.CREATE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
