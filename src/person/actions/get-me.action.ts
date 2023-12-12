import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { ApiResponse } from '../../common';
import { filterSherlError } from '../../common/utils/error';
import { PersonErr, errorFactory } from '../errors';

export const getMe = async (fetcher: Fetcher): Promise<IPerson> => {
  let response: ApiResponse<IPerson> | null = null;

  try {
    response = await fetcher.get<IPerson>(endpoints.GET_ME);

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PersonErr.FETCH_FORBIDDEN);
      case 404:
        throw errorFactory.create(PersonErr.FETCH_NOT_FOUND);
      default:
        throw errorFactory.create(PersonErr.FETCH_FAILED);
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      errorFactory.create(PersonErr.FETCH_FAILED),
    );
    throw filteredError;
  }
};
