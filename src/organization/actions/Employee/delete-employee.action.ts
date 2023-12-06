import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee } from '../../types';

/**
 * Deletes an employee record from a specified organization.
 *
 * This function sends a DELETE request to remove an employee from an organization. It uses the organization's unique ID
 * and the employee's unique ID to construct the endpoint for the request. On successful deletion, it returns the information
 * of the deleted employee encapsulated in an IEmployee object. If the deletion process encounters any errors, such as
 * a non-200 status response or connectivity issues, a specific error indicating the failure of the employee deletion is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the employee is being deleted.
 * @param {string} employeeId - The unique identifier of the employee to be deleted.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the deleted employee.
 * @throws {OrganizationErr.DELETE_EMPLOYEE_FAILED} Throws an error if the employee deletion fails.
 */

export const deleteEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employeeId: string,
): Promise<IEmployee> => {
  const response = await fetcher.delete<IEmployee>(
    StringUtils.bindContext(endpoints.MANAGE_EMPLOYEE, {
      organizationId,
      employeeId,
    }),
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED);
  }

  return response.data;
};
