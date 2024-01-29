import { SherlError } from '../../common';
import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { IPersonFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { PersonErr, errorFactory } from '../errors';
import { getSherlError } from '../../common/utils';

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
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PersonErr.FETCH_PERSONS_FORBIDDEN);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PersonErr.FETCH_PERSONS_FAILED),
        );
    }
  }
};
