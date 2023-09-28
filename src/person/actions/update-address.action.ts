import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';
import { IPlace } from '../../place';

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

    return response.data;
  } catch (error) {
    throw errorFactory.create(PersonErr.PUT_ADDRESS_FAILED);
  }
};
