import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';

/**
 * create new super administrator
 * @param data IPersonSuperAdmin
 * @returns
 */
export const addNewSuperAdmin = async (data: {
  firstName: string;
  lastName: string;
  email: string;
}): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.postPersonNewSuperAdmin(data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
