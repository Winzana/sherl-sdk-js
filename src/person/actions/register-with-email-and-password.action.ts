import { IPerson, IPersonRegister } from '../types';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { getSherlError } from '../../common/utils';

export const registerWithEmailAndPassword = async (
  fetcher: Fetcher,
  data: IPersonRegister,
): Promise<IPerson> => {
  try {
    const response = await fetcher.post<IPerson>(
      endpoints.REGISTER_WITH_EMAIL_AND_PASSWORD,
      data,
    );

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
    throw getSherlError(error, errorFactory.create(PersonErr.POST_FAILED));
  }
};
