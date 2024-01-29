import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';

/**
 * Log out the user.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @returns {Promise<string>} A promise that resolves to a string indicating the success of the logout operation.
 */
export const logout = async (fetcher: Fetcher): Promise<string> => {
  try {
    const response = await fetcher.get<string>(endpoints.LOGOUT);

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 401:
        throw errorFactory.create(AuthErr.LOGOUT_UNAUTHORIZED);
      default:
        throw getSherlError(error, errorFactory.create(AuthErr.LOGOUT_FAILED));
    }
  }
};
