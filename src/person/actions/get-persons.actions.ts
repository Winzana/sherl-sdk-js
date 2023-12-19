import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { IPersonFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { filterSherlError } from '../../common/utils/error';

/**
 * Retrieves a paginated list of persons based on provided filters.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {number} [page=1] - The page number of the results to be fetched (defaults to 1).
 * @param {number} [itemsPerPage=10] - The number of items per page (defaults to 10).
 * @param {IPersonFilters} filters - The filtering criteria to apply to the person list.
 * @returns {Promise<Pagination<IPerson>>} A promise that resolves to a paginated response containing the list of persons.
 */
export const getPersons = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: IPersonFilters,
): Promise<Pagination<IPerson>> => {
  try {
    const response = await fetcher.get<Pagination<IPerson>>(
      endpoints.GET_PERSONS,
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
        throw new Error(`Access denied to API (status: ${response.status})`);
      case 404:
        throw new Error(`Page not found (status: ${response.status})`);
      default:
        throw new Error(
          `Failed to fetch products API (status: ${response.status})`,
        );
    }
  } catch (error) {
    const filteredError = filterSherlError(
      error,
      Error(`Failed to fetch API (error: ${error})`),
    );
    throw filteredError;
  }
};
