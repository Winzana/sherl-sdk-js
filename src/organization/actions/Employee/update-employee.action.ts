import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

export const updateEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employeeId: string,
  updatedEmployee: Partial<IOrganizationMemberInputDto>,
): Promise<IEmployee> => {
  try {
    const response = await fetcher.put<IEmployee>(
      StringUtils.bindContext(endpoints.MANAGE_EMPLOYEE, {
        organizationId,
        employeeId,
      }),
      updatedEmployee,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.EMPLOYEE_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED),
    );
  }
};
