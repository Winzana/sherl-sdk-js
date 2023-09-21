import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IUpdatePasswordDto } from '../types';

export const updateMyPassword = async (
  fetcher: Fetcher,
  data: IUpdatePasswordDto,
): Promise<boolean> => {
  await fetcher.post<boolean>(endpoints.UPDATE_MY_PASSWORD, data).catch(() => {
    throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED);
  });
  return true;
};
