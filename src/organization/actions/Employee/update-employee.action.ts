import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateEmployeeResponse, IUpdateEmployeeRequest } from '../../types';

export const updateEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employeeId: string,
  request: IUpdateEmployeeRequest,
): Promise<IUpdateEmployeeResponse> => {
  const response = await fetcher.put<IUpdateEmployeeResponse>(
    StringUtils.bindContext(endpoints.UPDATE_EMPLOYEE, {
      organizationId,
      employeeId,
    }),
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
  }

  return response.data;
};
