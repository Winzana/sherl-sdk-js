import { Fetcher } from '../../common/api';
import { IPlace } from '../../place';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPerson } from '../types';

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

    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED);
  }
};
