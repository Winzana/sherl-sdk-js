import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteOpeningHoursSpecificationResponse } from '../../types';

export const deleteOpeningHoursSpecification = async (
  fetcher: Fetcher,
  organizationId: string,
  id: string,
  request: object,
): Promise<IDeleteOpeningHoursSpecificationResponse> => {
  const response = await fetcher.post<IDeleteOpeningHoursSpecificationResponse>(
    StringUtils.bindContext(endpoints.DELETE_OPENING_HOURS_SPECIFICATION, {
      organizationId,
      id,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(
      OrganizationErr.DELETE_OPENING_HOURS_SPECIFICATION_FAILED,
    );
  }

  return response.data;
};
