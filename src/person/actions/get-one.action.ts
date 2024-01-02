import { Fetcher } from '../../common/api';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';
import { PersonErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves the information of a person by its unique identifier.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the person to retrieve.
 * @returns {Promise<IPerson>} A promise that resolves to the information of the person identified by the ID.
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.FETCH_FORBIDDEN);
      default:
        throw errorFactory.create(PersonErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(PersonErr.FETCH_FAILED));
  }
};
