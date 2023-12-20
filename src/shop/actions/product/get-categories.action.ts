import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductCategoryFindByQuery,
} from '../../types';

/**
 * Retrieves a list of product categories, optionally filtered by specific criteria.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopProductCategoryFindByQuery} [filters] - Optional filters to apply when fetching categories.
 * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, based on the provided filters.
 */
export const getCategories = async (
  fetcher: Fetcher,
  filters?: IShopProductCategoryFindByQuery,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      endpoints.CATEGORIES_ALL,
      filters,
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.GET_CATEGORIES_FAILED_FORBIDDEN);
      default:
        throw errorFactory.create(ProductErr.GET_CATEGORIES_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_CATEGORIES_FAILED),
    );
  }
};
