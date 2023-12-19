import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';
import { filterSherlError } from '../../common/utils/error';

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
        throw new Error(`Access denied to API (status: ${response.status})`);
      case 404:
        throw new Error(`Page not found (status: ${response.status})`);
      default:
        throw new Error(`Failed to fetch API (status: ${response.status})`);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      Error(`Failed to fetch API (error: ${error})`),
    );
    throw filteredError;
  }
};
