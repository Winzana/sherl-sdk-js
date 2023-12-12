import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee } from '../../types';

export const deleteEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employeeId: string,
): Promise<IEmployee> => {
  try {
    const response = await fetcher.delete<IEmployee>(
      StringUtils.bindContext(endpoints.MANAGE_EMPLOYEE, {
        organizationId,
        employeeId,
      }),
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED),
    );
    throw filteredError;
  }
};
