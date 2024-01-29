import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { endpoints } from '../api/endpoints';
import { AuthErr, errorFactory } from '../errors';
import { ILoginResponse } from '../types';

/**
 * Refresh the authentication token.
 *
 * @param {Fetcher} fetcher - The Fetcher instance used for making API requests.
 * @returns {Promise<ILoginResponse>} A promise that resolves to a new access token.
 */
export const refreshToken = async (
  fetcher: Fetcher,
): Promise<ILoginResponse> => {
  try {
    const response = await fetcher.post<ILoginResponse>(
      endpoints.REFRESH_TOKEN,
      {},
    );

    if (!response.data.access_token) {
      throw errorFactory.create(AuthErr.AUTH_FAILED);
    }
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 401:
        throw errorFactory.create(AuthErr.AUTH_UNAUTHORIZED);
      default:
        throw getSherlError(error, errorFactory.create(AuthErr.AUTH_FAILED));
    }
  }
};
