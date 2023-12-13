import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { IPersonFilters } from '../types';
import { Pagination } from '../../common/types/response';
import { filterSherlError } from '../../common/utils/error';
import { PersonErr, errorFactory } from '../errors';

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
        throw errorFactory.create(PersonErr.FETCH_FORBIDDEN);
      default:
        throw errorFactory.create(PersonErr.FETCH_FAILED);
    }
  } catch (error) {
    throw filterSherlError(error, errorFactory.create(PersonErr.FETCH_FAILED));
  }
};
