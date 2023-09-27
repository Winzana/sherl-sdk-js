import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IEmployeeInputDto } from '../../types';

export const updateEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employeeId: string,
  request: Partial<IEmployeeInputDto>,
): Promise<IEmployee> => {
  try {
    const response = await fetcher.put<IEmployee>(
      StringUtils.bindContext(endpoints.MANAGE_EMPLOYEE, {
        organizationId,
        employeeId,
      }),
      request,
    );
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
  }
};
