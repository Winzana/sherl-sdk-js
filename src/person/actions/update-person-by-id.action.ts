import { Fetcher } from '../../common/api';
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
    const response = await fetcher
      .put<IPerson>(
        StringUtils.bindContext(endpoints.UPDATE_PERSON_BY_ID, { id }),
        body,
      )
      .catch(() => {
        throw errorFactory.create(PersonErr.PUT_FAILED);
      });

    return response.data;
  } catch (error) {
    throw errorFactory.create(PersonErr.PUT_FAILED);
  }
};
