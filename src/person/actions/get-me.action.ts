import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';

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
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
