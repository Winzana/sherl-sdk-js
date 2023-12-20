import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';

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
    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCTS_FETCH_FAILED);
  }
};
