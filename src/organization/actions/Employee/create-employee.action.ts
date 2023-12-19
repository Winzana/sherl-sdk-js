import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

/**
 * Creates a new employee record for a specified organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} organizationId - The unique identifier of the organization to which the employee is being added.
 * @param {IOrganizationMemberInputDto} employee - The details of the employee to be added.
 * @returns {Promise<IEmployee>} A promise that resolves to the information of the newly created employee.
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
