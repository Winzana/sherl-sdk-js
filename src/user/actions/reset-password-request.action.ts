import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordRequestDto } from '../types';
/**
 * Send a request to reset the user's password.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IResetPasswordRequestDto} data - The data for the password reset request.
 * @returns {Promise<boolean>} A promise that resolves to true if the request is successful.
 */
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
      default:
        throw errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(UserErr.RESET_PASSWORD_REQUEST_FAILED),
    );
  }
};
