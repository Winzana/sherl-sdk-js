import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';

export const getPublicProducts = async (
  fetcher: Fetcher,
  filters: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  const response = await fetcher.get<Pagination<IProductResponse>>(
    endpoints.GET_PUBLIC_PRODUCTS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(ProductErr.PRODUCTS_FETCH_FAILED, {
      status: response.status,
    });
  }

  return response.data;
};
