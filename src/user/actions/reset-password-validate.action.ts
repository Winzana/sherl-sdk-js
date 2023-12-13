import { Fetcher } from '../../common/api';
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
      case 404:
        throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_NOT_FOUND);
      case 409:
        throw errorFactory.create(
          UserErr.RESET_PASSWORD_VALIDATE_ALREADY_EXIST,
        );
      default:
        throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED);
  }
};
