import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
  }
};
