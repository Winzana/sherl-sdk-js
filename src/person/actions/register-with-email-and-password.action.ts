import { IPerson, IPersonRegister } from '../types';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { filterSherlError } from '../../common/utils/error';

/**
 * Registers a new user with its email and password.
 *
 * This function sends a POST request to register a new user using their email and password.
 * The registration data, encapsulated within the IPersonRegister object, is sent to the specified endpoint.
 * On successful registration, the function returns the newly created user's information.
 * If the registration process encounters any errors, such as API connectivity issues or failure in
 * the post operation, it throws a specific error.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPersonRegister} data - The registration data including email and password.
 * @returns {Promise<IPerson>} A promise that resolves to the information of the newly registered user.
 * @throws {Error} Throws an error if there is a failure in the post operation or if the API cannot be reached.
 */

export const registerWithEmailAndPassword = async (
  fetcher: Fetcher,
  data: IPersonRegister,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .post<IPerson>(endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD, data)
      .catch(() => {
        throw errorFactory.create(PersonErr.POST_FAILED);
      });

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.POST_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.POST_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.POST_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.POST_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.POST_FAILED),
    );
    throw filteredError;
  }
};
