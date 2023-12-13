import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';
import { IPlace } from '../../place';
import { filterSherlError } from '../../common/utils/error';

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
      default:
        throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
    }
  } catch (error) {
    throw filterSherlError(
      error,
      errorFactory.create(PersonErr.PUT_ADDRESS_FAILED),
    );
  }
};
