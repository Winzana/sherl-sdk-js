import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { errorFactory, UserErr } from '../errors';
import { IUpdatePasswordDto } from '../types';

/**
 * Update the user's password.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @param {IUpdatePasswordDto} data - The data for updating the user's password.
 * @returns {Promise<boolean>} A promise that resolves to true if the password update is successful.
 */
export const updateMyPassword = async (
  fetcher: Fetcher,
  data: IUpdatePasswordDto,
): Promise<boolean> => {
  try {
    const response = await fetcher.post<boolean>(
      endpoints.UPDATE_MY_PASSWORD,
      data,
    );

    switch (response.status) {
      case 200:
        return true;
      case 403:
        throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FORBIDDEN);
      default:
        throw errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(UserErr.UPDATE_MY_PASSWORD_FAILED),
    );
  }
};
