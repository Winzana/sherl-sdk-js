import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IEmployee } from '../../types';

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
