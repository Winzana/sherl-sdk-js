import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPersonRegister } from '../types';

/**
 * Creates a new person record in the system.
 *
 * This function sends a POST request to create a new person record. It takes a person object
 * as input and sends it to the specified endpoint. If the person is successfully created,
 * the function returns true. In case of any failure during the creation process, a specific
 * error is thrown to indicate that the person creation failed.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPersonRegister} person - The person object containing the details of the new person to be created.
 * @returns {Promise<boolean>} A promise that resolves to true if the person is successfully created.
 * @throws {PersonErr.CREATE_PERSON_FAILED} Throws a specific error if the person creation fails.
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

    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    }

    return true;
  } catch (error) {
    throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
  }
};
