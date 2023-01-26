import { Fetcher, Pagination } from '../../common/api';
import { endpoints } from '../api/endpoints';
import { IPlaceResponse } from '../types';

export const getPlaces = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IPlaceResponse[]>> => {
  const response = await fetcher.get<Pagination<IPlaceResponse[]>>(
    endpoints.GET_PLACES,
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
