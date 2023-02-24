import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';

export const deleteAddress = async (fetcher: Fetcher, id: string) => {
  try {
    await fetcher
      .delete(StringUtils.bindContext(endpoints.DELETE_ADDRESS, { id }))
      .catch((_err) => {
        throw errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED);
      });

    return true;
  } catch (error) {
    throw errorFactory.create(PersonErr.DELETE_ADDRESS_FAILED);
  }
};
