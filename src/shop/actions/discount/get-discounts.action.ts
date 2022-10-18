import { Pagination } from '../../../common/api';
import { IDiscountResponse } from '../../types/discount/types';
import { DiscountApi } from '../../api/discount/client';

export const getDiscounts = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IDiscountResponse[]>> => {
  const response = await DiscountApi.getDiscounts(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
