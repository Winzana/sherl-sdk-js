import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IUpdatePasswordDto } from '../types';

export const updateMyPassword = async (
  fetcher: Fetcher,
  data: Partial<IUpdatePasswordDto>,
): Promise<boolean> => {
  try {
    await fetcher
      .post<IUpdatePasswordDto>(endpoints.UPDATE_MY_PASSWORD, data)
      .catch(() => {
        throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED);
      });
    return true;
  } catch (err) {
    throw err;
  }
};
