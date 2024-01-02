import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPlace } from '../types';
import { Pagination } from '../../common';
import { PlaceErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

/**
 * Retrieves a paginated list of places based on the provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used to make API requests.
 * @param {number} page - The page number of the paginated results (default: 1).
 * @param {number} itemsPerPage - The number of items per page in the paginated results (default: 10).
 * @param {Object} filters - An object containing filters to apply to the query.
 * @returns {Promise<Pagination<IPlace>>} A promise that resolves to a paginated list of places.
 * @throws {Error} If the API request fails or returns an unexpected response.
 */
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

      default:
        throw errorFactory.create(PlaceErr.FETCH_FAILED);
    }
  } catch (error) {
    throw getSherlError(error, errorFactory.create(PlaceErr.FETCH_FAILED));
  }
};
