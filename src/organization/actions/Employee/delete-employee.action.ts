import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { OrganizationErr, errorFactory } from '../../errors';
import { IDeleteEmployeeResponse, IEmployeeRequest } from '../../types';

export const deleteEmployee = async (
  fetcher: Fetcher,
  request: IEmployeeRequest,
): Promise<IDeleteEmployeeResponse> => {
  const response = await fetcher.post<IDeleteEmployeeResponse>(
    endpoints.DELETE_EMPLOYEE,
    request,
  );

  if (response.status !== 200) {
    throw errorFactory.create(OrganizationErr.DELETE_EMPLOYEE_FAILED);
  }

  return response.data;
};
