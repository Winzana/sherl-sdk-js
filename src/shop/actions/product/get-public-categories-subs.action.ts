import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import {
  IPublicCategoryResponse,
  IPublicCategoryAndSubCategoryFindByDto,
} from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';

export const getPublicCategoriesAndSub = async (
  fetcher: Fetcher,
  filters: IPublicCategoryAndSubCategoryFindByDto,
): Promise<IPublicCategoryResponse[]> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES_AND_SUB,
      filters,
    );

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
  }
};
