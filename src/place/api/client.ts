import { IPlaceResponse } from '../types';
import { Pagination } from '../../common/api';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const fetcher = new Fetcher(errorFactory);

class PlaceApi {
  /**
   * Get list of place.
   *
   * @static
   * @memberof PlaceApi
   */
  public static getPlaces = (
    page = 1,
    itemsPerPage = 10,
    filters: { [key: string]: any },
  ) =>
    fetcher.get<Pagination<IPlaceResponse[]>>(endpoints.GET_PLACES, {
      page,
      itemsPerPage,
      ...filters,
    });
}

export { PlaceApi };
