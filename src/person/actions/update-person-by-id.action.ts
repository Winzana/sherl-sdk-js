import { ApiResponse, Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { IPersonMeResponse } from '../types';

export const updatePersonById = async (
  fetcher: Fetcher,
  id: string,
  params: Partial<IPersonMeResponse>,
): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await fetcher
      .put<IPersonMeResponse>(
        StringUtils.bindContext(endpoints.UPDATE_PERSON_BY_ID, { id }),
        params,
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.PUT_FAILED);
      });
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (!response.data) {
    throw errorFactory.create(PersonErr.PUT_FAILED);
  }

  return response.data;
};