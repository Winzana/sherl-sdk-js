import { Fetcher } from '../../common/api';
import { getSherlError } from '../../common/utils';
import { StringUtils } from '../../common/utils/string';
import { endpoints } from '../api/endpoints';
import { errorFactory, PersonErr } from '../errors';
import { IPerson, IPersonUpdate } from '../types';

export const updatePersonById = async (
  fetcher: Fetcher,
  id: string,
  body: Partial<IPersonUpdate>,
): Promise<IPerson> => {
  try {
    const response = await fetcher.put<IPerson>(
      StringUtils.bindContext(endpoints.UPDATE_PERSON_BY_ID, { id }),
      body,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.UPDATE_PERSON_BY_ID_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.PERSON_NOT_FOUND);
      default:
        throw errorFactory.create(PersonErr.UPDATE_PERSON_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(PersonErr.UPDATE_PERSON_BY_ID_FAILED),
    );
  }
};
