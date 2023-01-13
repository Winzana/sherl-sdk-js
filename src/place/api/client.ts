import { IPlaceResponse } from '../types';
import { Pagination, initializeConsoleApi } from '../../common/api';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';

const axiosInstance = initializeConsoleApi();
const fetcher = new Fetcher(errorFactory, axiosInstance);

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
