import { Fetcher, Pagination } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductResponse } from '../../types/product/types';

export const getPublicProducts = async (
  fetcher: Fetcher,
  page = 1,
  itemsPerPage = 10,
  filters: { [key: string]: any },
) => {
  const response = await fetcher.get<Pagination<IProductResponse[]>>(
    endpoints.GET_PUBLIC_PRODUCTS,
    {
      page,
      itemsPerPage,
      ...filters,
    },
  );

  if (response.status !== 200) {
    throw errorFactory.create(ProductErr.FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
