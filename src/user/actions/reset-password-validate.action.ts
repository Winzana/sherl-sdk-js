import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordDto } from '../types';

export const resetPasswordValidate = async (
  fetcher: Fetcher,
  data: IResetPasswordDto,
): Promise<boolean> => {
  await fetcher
    .post<IResetPasswordDto>(endpoints.RESET_PASSWORD_VALIDATE, data)
    .catch((err) => {
      throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED);
    });
  return true;
};
