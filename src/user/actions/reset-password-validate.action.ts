import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordDto } from '../types';

export const resetPasswordValidate = async (
  fetcher: Fetcher,
  data: IResetPasswordDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<IResetPasswordDto>(
      endpoints.RESET_PASSWORD_VALIDATE,
      data,
    );
    switch (response.status) {
      case 200:
        return true;
      case 403:
        throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FORBIDDEN);
      default:
        throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED),
    );
  }
};
