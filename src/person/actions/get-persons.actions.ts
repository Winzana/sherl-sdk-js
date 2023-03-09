import { Fetcher, Pagination } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPerson } from '../types';
import { PersonParams } from "../types/params";

export const getPersons = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: PersonParams,
): Promise<Pagination<IPerson[]>> => {
  const response = await fetcher.get<Pagination<IPerson[]>>(
    endpoints.GET_PERSONS,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
