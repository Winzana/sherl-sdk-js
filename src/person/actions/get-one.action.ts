import { ApiResponse, Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IPersonMeResponse } from '../types';

export const getPersonById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPersonMeResponse> => {
  let response: ApiResponse<IPersonMeResponse> | null = null;

  try {
    response = await fetcher.get<IPersonMeResponse>(
      StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
