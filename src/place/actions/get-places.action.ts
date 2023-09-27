import { Fetcher } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPlace } from '../types';
import { Pagination } from '../../common';

export const getPlaces = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IPlace>> => {
  const response = await fetcher.get<Pagination<IPlace>>(endpoints.GET_PLACES, {
    page,
    itemsPerPage,
    ...filters,
  });

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
