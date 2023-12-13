import { Fetcher } from '../../../common/api';
import { filterSherlError } from '../../../common/utils/error';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee, IOrganizationMemberInputDto } from '../../types';

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

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FORBIDDEN);
      case 404:
        throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_NOT_FOUND);
      default:
        throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED),
    );
  }
};
