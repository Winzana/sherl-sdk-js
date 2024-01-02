import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';

/**
 * Retrieves a list of public products, filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IProductFindByDto} filters - The filter criteria used to query the public products. These can include various criteria such as category, price range, etc.
 * @returns {Promise<Pagination<IProductResponse>>} A promise that resolves to a paginated response containing the list of public products based on the provided filters.
 */
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
