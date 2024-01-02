import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';
import { getSherlError } from '../../common/utils';

/**
 * Deletes an address record associated with a given ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the address to be deleted.
 * @returns {Promise<IPerson>} A promise that resolves to the person's information after the address deletion.
 */
export const deleteAddress = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPerson> => {
  try {
    const response = await fetcher.delete<IPerson>(
      StringUtils.bindContext(endpoints.DELETE_ADDRESS, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.DELETE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.ADDRESS_NOT_FOUND);
      default:
        throw errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED),
    );
  }
};
