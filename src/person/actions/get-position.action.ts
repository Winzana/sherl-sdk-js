import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPositionInputDto } from '../types';
import { ILocation, Pagination } from '../../common';
import { PersonErr, errorFactory } from '../errors';
import { filterSherlError } from '../../common/utils/error';

export const getCurrentAddress = async (
  fetcher: Fetcher,
  position: IPositionInputDto,
): Promise<Pagination<ILocation>> => {
  try {
    const response = await fetcher.get<Pagination<ILocation>>(
      endpoints.GET_POSITION,
      position,
    );

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
