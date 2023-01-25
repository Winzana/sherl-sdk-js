import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IAddPerson } from '../types';

export const addPerson = async (
  fetcher: Fetcher,
  person: IAddPerson,
): Promise<IAddPerson> => {
  const response = await fetcher
    .post<IAddPerson>(endpoints.ADD_PERSON, { person })
    .catch((_err) => {
      throw errorFactory.create(PersonErr.ADD_USER_FAILED);
    });

  if (!response.data) {
    throw errorFactory.create(PersonErr.ADD_USER_FAILED);
  }

  return response.data;
};
