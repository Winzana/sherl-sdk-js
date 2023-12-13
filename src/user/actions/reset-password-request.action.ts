import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordRequestDto } from '../types';

export const resetPasswordRequest = async (
  fetcher: Fetcher,
  data: IResetPasswordRequestDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<IResetPasswordRequestDto>(
      endpoints.RESET_PASSWORD_REQUEST,
      data,
    );

    switch (response.status) {
      case 200:
        return true;
      case 403:
        throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FORBIDDEN);
      case 404:
        throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_NOT_FOUND);
      default:
        throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FAILED);
  }
};
