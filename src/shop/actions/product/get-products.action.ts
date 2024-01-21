import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a list of products, optionally filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IProductFindByDto} filters - The filter criteria used to query the products.
 * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of products based on the provided filters.
 */
export const getProducts = async (
  fetcher: Fetcher,
  filters: IProductFindByDto,
): Promise<Pagination<IProductResponse>> => {
  try {
    const response = await fetcher.get<Pagination<IProductResponse>>(
      endpoints.GET_PRODUCTS,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.GET_PRODUCTS_FORBIDDEN);
      default:
        throw errorFactory.create(ProductErr.GET_PRODUCTS_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PRODUCTS_FAILED),
    );
  }
};
