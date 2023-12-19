import { Fetcher } from '../../../common/api';
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
    if (response.status !== 200) {
      throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
  }
};
