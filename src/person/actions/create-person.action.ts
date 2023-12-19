import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPersonRegister } from '../types';

/**
 * Creates a new person record in the system.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPersonRegister} person - The person object containing the details of the new person to be created.
 * @returns {Promise<boolean>} A promise that resolves to true if the person is successfully created.
 */
export const createPerson = async (
  fetcher: Fetcher,
  person: IPersonRegister,
) => {
  try {
    const response = await fetcher
      .post<IPersonRegister>(endpoints.CREATE_PERSON, { ...person })
      .catch((_err) => {
        throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
      });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.CREATE_PERSON_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.CREATE_PERSON_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    }

    return true;
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_PERSON_FAILED),
    );
    throw filteredError;
  }
};
