import { IDiscountResponse } from '../../types/discount/types';
import { DiscountApi } from '../../api/discount/client';
import { Pagination } from '../../../common/api';

export const getDiscountByParams = async (slug: {
  [key: string]: any;
}): Promise<Pagination<IDiscountResponse>> => {
  const response = await DiscountApi.getDiscountByParams(slug);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
