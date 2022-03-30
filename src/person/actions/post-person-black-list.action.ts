import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';

/**
 * add person to black list
 * @param data IPersonSuperAdmin
 * @returns
 */
export const addPersonBlackList = async (id: string): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.postPersonBlackList(id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
