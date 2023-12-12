import { Fetcher } from '../../common/api';
import { filterSherlError } from '../../common/utils/error';
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

    switch (response.status) {
      case 201:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.CREATE_PERSON_NOT_FOUND);
      case 409:
        throw errorFactory.create(PersonErr.CREATE_PERSON_ALREADY_EXISTS);
      default:
        throw errorFactory.create(PersonErr.CREATE_PERSON_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.CREATE_PERSON_FAILED),
    );
    throw filteredError;
  }
};
