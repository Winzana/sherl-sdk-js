import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

/**
 * Updates an employee's details within a specified organization.
 *
 * This function sends a PUT request to modify the details of an existing employee in an organization.
 * It requires the organization's unique ID and the employee's unique ID to construct the endpoint for the request.
 * The updated employee details are provided in a Partial<IOrganizationMemberInputDto> object. On successful update,
 * it returns the information of the updated employee encapsulated in an IEmployee object. If the update process
 * encounters any errors, such as a non-200 status response or connectivity issues, a specific error indicating
 * the failure of the employee update is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the employee belongs.
 * @param {string} employeeId - The unique identifier of the employee to be updated.
 * @param {Partial<IOrganizationMemberInputDto>} updatedEmployee - The partial data of the employee to be updated.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the updated employee.
 * @throws {OrganizationErr.UPDATE_EMPLOYEE_FAILED} Throws an error if the employee update fails.
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
