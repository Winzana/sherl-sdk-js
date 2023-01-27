import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IUpdatePasswordDto } from '../types';
import { errorFactory, UserErr } from '../errors';

export const updateMyPassword = async (
  fetcher: Fetcher,
  data: Partial<IUpdatePasswordDto>,
): Promise<IUpdatePasswordDto> => {
  let response: ApiResponse<IUpdatePasswordDto> | null = null;

  try {
    response = await fetcher
      .post<IUpdatePasswordDto>(endpoints.UPDATE_MY_PASSWORD, data)
      .catch(() => {
        throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED);
      });
  } catch (err) {
    throw new Error('Cannot reach API');
  }

  if (!response.data) {
    throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED);
  }

  return response.data;
};
