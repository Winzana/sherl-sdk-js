import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';
import { IPersonNew } from '../types';

/**
 * Update person by id.
 * @param id string
 * @param data object IPersonNew
 * @returns
 */
export const updatePersonById = async (
  id: string,
  data: IPersonNew,
): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.putUserById(id, data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
