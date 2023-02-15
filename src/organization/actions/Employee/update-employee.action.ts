import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IUpdateEmployeeResponse, IEmployeeRequest } from '../../types';

export const updateEmployee = async (
  fetcher: Fetcher,
  request: IEmployeeRequest,
): Promise<IUpdateEmployeeResponse> => {
  const response = await fetcher.put<IEmployeeRequest>(
    endpoints.UPDATE_EMPLOYEE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.UPDATE_EMPLOYEE_FAILED);
  }

  return response.data;
};
