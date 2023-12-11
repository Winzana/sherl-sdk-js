import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';
import { filterSherlError } from '../../common/utils/error';

/**
 * Retrieves the information of the currently authenticated user.
 *
 * This function sends a GET request to an endpoint designed to fetch the details of the current user.
 * It aims to retrieve a single IPerson object representing the user. If the request is successful,
 * it returns the user's data. In case of any connectivity or other errors, it throws a generic error
 * indicating the inability to reach the API. Additionally, if the response is empty, it throws an error
 * indicating an empty response from the API.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IPerson>} A promise that resolves to the authenticated user's information.
 * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
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
