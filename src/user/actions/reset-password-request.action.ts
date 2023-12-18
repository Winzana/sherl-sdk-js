import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordRequestDto } from '../types';
/**
 * Send a request to reset the user's password.
 *
 * This function sends a POST request to request a password reset for the user.
 * It returns a boolean indicating whether the request was successful.
 * It handles different HTTP status codes and throws specific errors for different scenarios.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IResetPasswordRequestDto} data - The data for the password reset request.
 * @returns {Promise<boolean>} A promise that resolves to true if the request is successful.
 * @throws {UserErr.RESET_PASSWORD_REQUEST_FORBIDDEN} Throws an error if the request is forbidden (HTTP 403).
 * @throws {UserErr.RESET_PASSWORD_REQUEST_FAILED} Throws an error for other failure scenarios.
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
