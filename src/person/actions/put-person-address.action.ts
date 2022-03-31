import { ApiResponse } from '../../common/api';
import { IPlace } from '../../common/types';
import { PersonApi } from '../api/client';

/**
 * Update an address to current Person.
 * @param id string
 * @returns
 */
export const updatePersonAddressById = async (
  id: string,
  data: IPlace,
): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.putAddressByUserId(id, data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
