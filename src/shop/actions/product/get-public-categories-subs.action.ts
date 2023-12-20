import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import {
  IPublicCategoryResponse,
  IPublicCategoryAndSubCategoryFindByDto,
} from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

export const getPublicCategoriesAndSub = async (
  fetcher: Fetcher,
  filters: IPublicCategoryAndSubCategoryFindByDto,
): Promise<IPublicCategoryResponse[]> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES_AND_SUB,
      filters,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_CATEGORIES_AND_SUBS_FAILED),
    );
  }
};
