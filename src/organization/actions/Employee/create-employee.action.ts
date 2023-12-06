import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

/**
 * Creates a new employee record for a specified organization.
 *
 * This function sends a POST request to add a new employee to an organization. It requires the organization's unique ID
 * to construct the endpoint, and the employee's details are provided in the IOrganizationMemberInputDto object.
 * On successful creation, it returns the newly created employee's information encapsulated in an IEmployee object.
 * If the employee creation process encounters any errors, such as a non-201 status response or connectivity issues,
 * a specific error indicating the failure of the employee creation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the employee is being added.
 * @param {IOrganizationMemberInputDto} employee - The details of the employee to be added.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the newly created employee.
 * @throws {OrganizationErr.CREATE_EMPLOYEE_FAILED} Throws an error if the employee creation fails.
 */

export const createEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  employee: IOrganizationMemberInputDto,
): Promise<IEmployee> => {
  try {
    const response = await fetcher.post<IEmployee>(
      StringUtils.bindContext(endpoints.CREATE_EMPLOYEE, {
        organizationId,
      }),
      employee,
    );

    if (response.status !== 201) {
      throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED);
    }
    return response.data;
  } catch (error) {
    throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED);
  }
};
