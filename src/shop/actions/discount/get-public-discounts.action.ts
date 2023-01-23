import { Fetcher, Pagination } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscountResponse } from '../../types/discount/types';

export const getPublicDiscounts = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IDiscountResponse[]>> => {
  const response = await fetcher.get<Pagination<IDiscountResponse[]>>(
    endpoints.GET_PUBLIC_DISCOUNTS,
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
