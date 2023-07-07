import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordRequestDto } from '../types';

export const resetPasswordRequest = async (
  fetcher: Fetcher,
  data: IResetPasswordRequestDto,
): Promise<boolean> => {
  try {
    await fetcher
      .post<IResetPasswordRequestDto>(endpoints.RESET_PASSWORD_REQUEST, data)
      .catch(() => {
        throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FAILED);
      });
    return true;
  } catch (err) {
    throw err;
  }
};
