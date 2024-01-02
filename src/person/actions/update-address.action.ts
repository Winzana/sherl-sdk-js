import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';
import { IPlace } from '../../place';
import { getSherlError } from '../../common/utils';

/**
 * Updates the address details for a specific address ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} addressId - The unique identifier of the address to be updated.
 * @param {IPlace} updatedAddress - The new address details to be updated.
 * @returns {Promise<IPerson>} A promise that resolves to the updated person's information after the address update.
 */
export const updateAddress = async (
  fetcher: Fetcher,
  addressId: string,
  updatedAddress: IPlace,
): Promise<IPerson> => {
  try {
    const response = await fetcher.put<IPerson>(
      StringUtils.bindContext(endpoints.UPDATE_ADDRESS, { id: addressId }),
      updatedAddress,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.UPDATE_ADDRESS_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.ADDRESS_NOT_FOUND);
      default:
        throw errorFactory.create(PersonErr.UPDATE_ADDRESS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.UPDATE_ADDRESS_FAILED),
    );
  }
};
