import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
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
    const response = await fetcher.post<IPersonRegister>(
      endpoints.CREATE_PERSON,
      { ...person },
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FORBIDDEN);
      case 409:
        throw errorFactory.create(PersonErr.CREATE_PERSON_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_PERSON_FAILED),
    );
  }
};
