import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteEmployeeResponse } from '../../types';

export const deleteEmployee = async (
  fetcher: Fetcher,
  id: string,
  employeeId: string,
  request: object,
): Promise<IDeleteEmployeeResponse> => {
  const response = await fetcher.post<IDeleteEmployeeResponse>(
    StringUtils.bindContext(endpoints.DELETE_EMPLOYEE, {
      id,
      employeeId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED);
  }

  return response.data;
};
