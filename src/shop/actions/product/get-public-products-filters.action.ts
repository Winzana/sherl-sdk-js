import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';

export const getPublicProductsWithFilters = async (
  fetcher: Fetcher,
  filters: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IProductResponse>>(
      endpoints.GET_PUBLIC_PRODUCTS_DEFAULT_FILTERS,
      filters,
    );
    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCTS_FETCH_FAILED);
  }
};
