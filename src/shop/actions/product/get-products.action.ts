import { Pagination } from '../../../common/api';
import { IProductResponse } from '../../types/product/types';
import { ProductApi } from '../../api/product/client';

export const getProducts = async (
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
): Promise<Pagination<IProductResponse[]>> => {
  const response = await ProductApi.getProducts(page, itemsPerPage, filters);

  if (response.status !== 200) {
    throw new Error(
      `Failed to fetch products API (status: ${response.status})`,
    );
  }

  return response.data;
};
