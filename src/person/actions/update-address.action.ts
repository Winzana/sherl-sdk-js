import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';
import { IPlace } from '../../place';
import { filterSherlError } from '../../common/utils/error';

/**
 * Updates the address details for a specific address ID.
 *
 * This function sends a PUT request to update the address associated with a given address ID.
 * It takes the address ID and the new address details encapsulated within the IPlace object.
 * On successful update, it returns the updated person's information including the modified address.
 * If the update process encounters any errors, a specific error indicating the failure of the PUT operation is thrown.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} addressId - The unique identifier of the address to be updated.
 * @param {IPlace} updatedAddress - The new address details to be updated.
 * @returns {Promise<IPerson>} A promise that resolves to the updated person's information after the address update.
 * @throws {PersonErr.PUT_ADDRESS_FAILED} Throws an error if the address update fails.
 */

export const updateAddress = async (
  fetcher: Fetcher,
  addressId: string,
  updatedAddress: IPlace,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .put<IPerson>(
        StringUtils.bindContext(endpoints.UPDATE_ADDRESS, { id: addressId }),
        updatedAddress,
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
      });

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.PUT_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.PUT_ADDRESS_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.PUT_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.PUT_ADDRESS_FAILED),
    );
    throw filteredError;
  }
};
