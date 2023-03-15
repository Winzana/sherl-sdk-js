import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateEmployeeResponse, IEmployeeRequest } from '../../types';

export const createEmployee = async (
  fetcher: Fetcher,
  organizationId: string,
  request: IEmployeeRequest,
): Promise<ICreateEmployeeResponse> => {
  const response = await fetcher.post<ICreateEmployeeResponse>(
    StringUtils.bindContext(endpoints.CREATE_EMPLOYEE, {
      organizationId,
    }),
    request,
  );

  if (response.status !== 201) {
    throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED);
  }

  return response.data;
};
