import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IResetPasswordDto } from '../types';

/**
 * Validate a user's password reset request.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IResetPasswordDto} data - The data for validating the password reset request.
 * @returns {Promise<boolean>} A promise that resolves to true if the validation is successful.
 */
export const resetPasswordValidate = async (
  fetcher: Fetcher,
  data: IResetPasswordDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(
      endpoints.RESET_PASSWORD_VALIDATE,
      data,
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 200:
        return true;
      case 403:
        throw errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(UserErr.RESET_PASSWORD_VALIDATE_FAILED),
        );
    }
  }
};
