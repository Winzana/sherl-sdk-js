import { IPerson, IPersonRegister } from '../types';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Registers a new user with its email and password.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPersonRegister} data - The registration data including email and password.
 * @returns {Promise<IPerson>} A promise that resolves to the information of the newly registered user.
 */
export const registerWithEmailAndPassword = async (
  fetcher: Fetcher,
  data: IPersonRegister,
): Promise<IPerson> => {
  try {
    const response = await fetcher.post<IPerson>(
      endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD,
      data,
    );

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.REGISTER_PERSON_FORBIDDEN);
      case 409:
        throw errorFactory.create(PersonErr.PERSON_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.REGISTER_PERSON_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.REGISTER_PERSON_FAILED),
    );
  }
};
