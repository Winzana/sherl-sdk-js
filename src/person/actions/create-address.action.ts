import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
import { IPlace } from '../../place';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPerson } from '../types';

/**
 * Creates a new address record and associates it with a person.
 *
 * This function sends a POST request to create a new address record in the system.
 * It accepts an address object and sends it to the specified endpoint.
 * On successful creation, it returns the updated person's information, including the new address.
 * If the creation fails, it throws a specific error.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPlace} address - The address object containing the details of the new address to be created.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information with the newly created address.
 * @throws {PersonErr.CREATE_ADDRESS_FAILED} Throws a specific error if the address creation fails.
 */

export const createAddress = async (
  fetcher: Fetcher,
  address: IPlace,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .post<IPerson>(endpoints.CREATE_ADDRESS, { ...address })
      .catch(() => {
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
      });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED),
    );
    throw filteredError;
  }
};
