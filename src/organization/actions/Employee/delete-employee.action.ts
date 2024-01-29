import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee } from '../../types';

/**
 * Deletes an employee record from a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization from which the employee is being deleted.
 * @param {string} employeeId - The unique identifier of the employee to be deleted.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the deleted employee.
 */
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

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.EMPLOYEE_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED),
        );
    }
  }
};
