import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { ApiResponse } from '../../common';
import { IConfig } from '../../config/types';
import { filterSherlError } from '../../common/utils/error';
import { errorFactory, PersonErr } from '../errors';

export const getConfigs = async (fetcher: Fetcher): Promise<IConfig[]> => {
  let response: ApiResponse<IConfig[]> | null = null;

  try {
    response = await fetcher.get<IConfig[]>(endpoints.GET_CONFIG);

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
