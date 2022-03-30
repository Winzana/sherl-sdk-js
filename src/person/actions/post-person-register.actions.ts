import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';
import { IPersonRegister } from '../types';

export const registerPerson = async (
  data: IPersonRegister,
): Promise<string> => {
  let response: ApiResponse<PersonApi> | null = null;
  try {
    response = await PersonApi.postPersonRegister(data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
