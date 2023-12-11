import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ApiResponse } from '../../common';
import { IConfig } from '../../config/types';
import { filterSherlError } from '../../common/utils/error';

/**
 * Retrieves a list of configuration settings from the API.
 *
 * This function sends a GET request to fetch configuration settings. It aims to retrieve an array
 * of configuration objects. In case the request is successful, it returns the array of configurations.
 * If the request fails due to connectivity issues or other errors, it throws a generic error indicating
 * the inability to reach the API. Additionally, if the response is empty, it throws an error indicating
 * an empty response from the API.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IConfig[]>} A promise that resolves to an array of configuration objects.
 * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
 */

export const getConfigs = async (fetcher: Fetcher): Promise<IConfig[]> => {
  let response: ApiResponse<IConfig[]> | null = null;

  try {
    response = await fetcher.get<IConfig[]>(endpoints.GET_CONFIG);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw new Error(`Access denied to API (status: ${response.status})`);
      case 404:
        throw new Error(`Page not found (status: ${response.status})`);
      default:
        throw new Error(
          `Failed to fetch products API (status: ${response.status})`,
        );
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      Error(`Failed to fetch API (error: ${error})`),
    );
    throw filteredError;
  }
};
