import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';
import { PersonErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves the information of the currently authenticated user.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IPerson>} A promise that resolves to the authenticated user's information.
 */
export const getMe = async (fetcher: Fetcher): Promise<IPerson> => {
  let response: ApiResponse<IPerson> | null = null;

  try {
    response = await fetcher.get<IPerson>(endpoints.GET_ME);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.GET_ME_FORBIDDEN);
      default:
        throw errorFactory.create(PersonErr.GET_CONFIGS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.GET_CONFIGS_FAILED),
    );
  }
};
