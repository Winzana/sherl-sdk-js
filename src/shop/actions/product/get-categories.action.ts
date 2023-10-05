import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductCategoryFindByQuery,
} from '../../types';

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
