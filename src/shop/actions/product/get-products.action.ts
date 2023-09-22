import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';

export const getProducts = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IProductResponse>> => {
  const response = await fetcher.get<Pagination<IProductResponse>>(
    endpoints.GET_PRODUCTS,
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
