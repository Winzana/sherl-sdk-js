import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { IPlace } from '../../place';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPerson } from '../types';

/**
 * Creates a new address record and associates it with a person.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IPlace} address - The address object containing the details of the new address to be created.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information with the newly created address.
 */
export const createAddress = async (
  fetcher: Fetcher,
  address: IPlace,
): Promise<IPerson> => {
  try {
    const response = await fetcher.post<IPerson>(endpoints.CREATE_ADDRESS, {
      ...address,
    });

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FORBIDDEN);
      case 409:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED),
    );
  }
};
