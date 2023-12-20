import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { getSherlError } from '../../../common/utils/errors';

export const getPublicProducts = async (
  fetcher: Fetcher,
  filters: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IProductResponse>>(
      endpoints.GET_PUBLIC_PRODUCTS,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED),
    );
  }
};
