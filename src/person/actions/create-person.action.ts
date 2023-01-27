import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { PersonErr, errorFactory } from '../errors';
import { IPersonRegister } from '../types';

export const createPerson = async (
  fetcher: Fetcher,
  person: IPersonRegister,
) => {
  try {
    const response = await fetcher
      .post<IPersonRegister>(endpoints.CREATE_PERSON, { ...person })
      .catch((_err) => {
        throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
      });

    if (response.status !== 201) {
      throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    }

    return true;
  } catch (error) {
    throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
  }
};
