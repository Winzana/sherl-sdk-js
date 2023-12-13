import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
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
    throw filterSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_ADDRESS_FAILED),
    );
  }
};
