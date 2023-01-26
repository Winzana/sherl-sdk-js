import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IAddPerson } from '../types';

export const addPerson = async (
  fetcher: Fetcher,
  person: IAddPerson,
): Promise<void> => {
  const response = await fetcher
    .post<void>(endpoints.ADD_PERSON, { ...person })
    .catch((_err) => {
      throw errorFactory.create(PersonErr.ADD_USER_FAILED);
    });

  if (response.status !== 201) {
    throw errorFactory.create(PersonErr.ADD_USER_FAILED);
  }

  return response.data;
};
