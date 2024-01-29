import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { errorFactory, ProductErr } from '../../errors/product/errors';
import { IProductFindByDto, IProductResponse } from '../../types';
import { Pagination } from '../../../common/types/response';
import { getSherlError } from '../../../common/utils/errors';

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
  try {
    const response = await fetcher.get<Pagination<IProductResponse>>(
      endpoints.GET_PUBLIC_PRODUCTS,
      filters,
    );

    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FORBIDDEN,
        );
      default:
        throw getSherlError(
          error,
          errorFactory.create(
            ProductErr.GET_PUBLIC_PRODUCTS_WITH_FILTERS_FAILED,
          ),
        );
    }
  }
};
