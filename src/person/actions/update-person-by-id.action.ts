import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { IPerson, IPersonUpdate } from '../types';

/**
 * Updates the details of a person identified by their unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the person to be updated.
 * @param {Partial<IPersonUpdate>} body - The updated information for the person, as a partial update object.
 * @returns {Promise<IPerson>} A promise that resolves to the updated person's information.
 */
export const updatePersonById = async (
  fetcher: Fetcher,
  id: string,
  body: Partial<IPersonUpdate>,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .put<IPerson>(
        StringUtils.bindContext(endpoints.UPDATE_PERSON_BY_ID, { id }),
        body,
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.PUT_FAILED);
      });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.PUT_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.PUT_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.PUT_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.PUT_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.PUT_FAILED),
    );
    throw filteredError;
  }
};
