import { ApiResponse, Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPasswordChange } from '../types';
import { errorFactory, UserErr } from '../errors';

export const updateMyPassword = async (
  fetcher: Fetcher,
  data: Partial<IPasswordChange>,
): Promise<IPasswordChange> => {
  let response: ApiResponse<IPasswordChange> | null = null;

  try {
    response = await fetcher
      .post<IPasswordChange>(endpoints.UPDATE_MY_PASSWORD, data)
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
