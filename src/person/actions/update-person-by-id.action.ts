import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { IPerson, IPersonUpdate } from '../types';
import { ApiResponse } from '../../common';

export const updatePersonById = async (
  fetcher: Fetcher,
  id: string,
  params: Partial<IPersonUpdate>,
): Promise<IPerson> => {
  let response: ApiResponse<IPerson> | null = null;

  try {
    response = await fetcher
      .put<IPerson>(
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
