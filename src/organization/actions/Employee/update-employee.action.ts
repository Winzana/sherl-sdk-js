import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

/**
 * Updates an employee's details within a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the employee belongs.
 * @param {string} employeeId - The unique identifier of the employee to be updated.
 * @param {Partial<IOrganizationMemberInputDto>} updatedEmployee - The partial data of the employee to be updated.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the updated employee.
 */
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
