import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { ICreateEmployeeResponse, IEmployeeRequest } from '../../types';

export const createEmployee = async (
  fetcher: Fetcher,
  request: IEmployeeRequest,
): Promise<ICreateEmployeeResponse> => {
  const response = await fetcher.post<ICreateEmployeeResponse>(
    endpoints.CREATE_EMPLOYEE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.CREATE_EMPLOYEE_FAILED);
  }

  return response.data;
};
