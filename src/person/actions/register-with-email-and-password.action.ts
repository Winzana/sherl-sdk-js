import { IPerson, IPersonRegister } from '../types';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { filterSherlError } from '../../common/utils/error';

export const registerWithEmailAndPassword = async (
  fetcher: Fetcher,
  data: IPersonRegister,
): Promise<IPerson> => {
  try {
    const response = await fetcher
      .post<IPerson>(endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD, data)
      .catch(() => {
        throw errorFactory.create(PersonErr.POST_FAILED);
      });

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.POST_FORBIDDEN);
      case 409:
        throw errorFactory.create(PersonErr.POST_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.POST_FAILED);
    }
  } catch (error) {
    throw filterSherlError(error, errorFactory.create(PersonErr.POST_FAILED));
  }
};
