import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IAddressRegister } from '../types';

export const createAddress = async (
  fetcher: Fetcher,
  address: IAddressRegister,
) => {
  try {
    const response = await fetcher
      .post<IAddressRegister>(endpoints.CREATE_ADDRESS, { ...address })
      .catch((_err) => {
        throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
      });

    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
    }

    return true;
  } catch (error) {
    throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
  }
};
