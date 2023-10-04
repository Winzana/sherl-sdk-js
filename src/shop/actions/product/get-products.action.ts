import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { ProductErr, errorFactory } from '../../errors/product/errors';

export const getProducts = async (
  fetcher: Fetcher,
  filters: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  const response = await fetcher.get<Pagination<IProductResponse>>(
    endpoints.GET_PRODUCTS,
    filters,
  );

  if (response.status !== 200) {
    throw errorFactory.create(ProductErr.PRODUCTS_FETCH_FAILED);
  }

  return response.data;
};
