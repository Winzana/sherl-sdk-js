import { Fetcher, Pagination } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IDiscountResponse } from '../../types/discount/types';

export const getDiscountByParams = async (
  fetcher: Fetcher,
  params: {
    [key: string]: any;
  },
): Promise<Pagination<IDiscountResponse>> => {
  const response = await fetcher.get<Pagination<IDiscountResponse>>(
    endpoints.GET_DISCOUNT_BY,
    {
      params,
    },
  );

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
