import { Fetcher, Pagination } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPersonMeResponse } from '../types';

export const getPersons = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: string },
): Promise<Pagination<IPersonMeResponse[]>> => {
  const response = await fetcher.get<Pagination<IPersonMeResponse[]>>(
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
