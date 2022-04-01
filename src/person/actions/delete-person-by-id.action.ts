import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';

/**
 * delete person by id
 * @param id string
 * @returns
 */
export const deletePersonById = async (id: string): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.deleteUserById(id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
