import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPlace } from '../types';
import { Pagination } from '../../common';
import { PlaceErr, errorFactory } from '../errors';

export const getPlaces = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IPlace>> => {
  try {
    const response = await fetcher.get<Pagination<IPlace>>(
      endpoints.GET_PLACES,
      {
        page,
        itemsPerPage,
        ...filters,
      },
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PlaceErr.FETCH_PLACES_FORBIDDEN);
      case 404:
        throw errorFactory.create(PlaceErr.FETCH_PLACES_NOT_FOUND);
      case 409:
        throw errorFactory.create(PlaceErr.FETCH_PLACES_ALREADY_EXIST);
      default:
        throw errorFactory.create(PlaceErr.FETCH_FAILED);
    }
  } catch (error) {
    throw errorFactory.create(PlaceErr.FETCH_FAILED);
  }
};
