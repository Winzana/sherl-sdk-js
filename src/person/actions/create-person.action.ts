import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { ICreatePerson } from '../types';

export const createPerson = async (
  fetcher: Fetcher,
  person: ICreatePerson,
): Promise<void> => {
  const response = await fetcher
    .post<void>(endpoints.POST_CREATE_PERSON, { ...person })
    .catch((_err) => {
      throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    });

  if (response.status !== 201) {
    throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
  }

  return response.data;
};
