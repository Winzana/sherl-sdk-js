import { ApiResponse } from '../../common/api';
import { PersonApi } from '../api/client';
import { errorFactory, PersonErr } from '../errors';
import { IPersonMeResponse } from '../types';

export const putPersonById = async (
  id: string,
  params: Partial<IPersonMeResponse>,
): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await PersonApi.putPersonById(id, params);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (!response.data) {
    throw errorFactory.create(PersonErr.POST_FAILED);
  }

  return response.data;
};
