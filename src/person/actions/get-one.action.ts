import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';

/**
 * Retrieves the information of a person by its unique identifier.
 *
 * This function sends a GET request to fetch the details of a person based on a specified ID.
 * It constructs the endpoint using the ID and then sends the request. If successful,
 * it returns the person's data encapsulated in an IPerson object. In case of connectivity issues
 * or other errors, it throws an error indicating the inability to reach the API.
 * Additionally, if the response from the API is empty, it throws an error indicating this condition.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the person to retrieve.
 * @returns {Promise<IPerson>} A promise that resolves to the information of the person identified by the ID.
 * @throws {Error} Throws an error if the API is unreachable or if the response is empty.
 */

export const getPersonById = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPerson> => {
  let response: ApiResponse<IPerson> | null = null;

  try {
    response = await fetcher.get<IPerson>(
      StringUtils.bindContext(endpoints.GET_ONE_BY_USERID, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
