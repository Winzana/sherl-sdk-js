import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { IPerson } from '../types';

export const deleteAddress = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .delete<IPerson>(
        StringUtils.bindContext(endpoints.DELETE_ADDRESS, { id }),
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED);
      });

    return response.data;
  } catch (error) {
    throw errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED);
  }
};
