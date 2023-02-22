import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import {
  IDeleteOpeningHoursSpecificationResponse,
  IOpeningHoursSpecificationRequest,
} from '../../types';

export const deleteOpeningHoursSpecification = async (
  fetcher: Fetcher,
  request: IOpeningHoursSpecificationRequest,
): Promise<IDeleteOpeningHoursSpecificationResponse> => {
  const response = await fetcher.post<IDeleteOpeningHoursSpecificationResponse>(
    endpoints.DELETE_OPENING_HOURS_SPECIFICATION,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
