import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a list of public products, optionally filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IProductFindByDto} [filters] - Optional filters to apply when fetching public products. These can include various criteria such as category, price range, etc.
 * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of public products based on the provided filters.
 */
export const getPublicProductsWithFilters = async (
  fetcher: Fetcher,
  filters?: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IProductResponse>>(
      endpoints.GET_PUBLIC_PRODUCTS_DEFAULT_FILTERS,
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
