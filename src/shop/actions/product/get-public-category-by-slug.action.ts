import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IPublicCategoryResponse } from '../../types';

export const getPublicCategoryBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IPublicCategoryResponse> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse>(
      endpoints.GET_PUBLIC_CATEGORIES_SLUG,
      { slug },
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.SLUG_CATEGORY_NOT_FOUND);
      default:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FAILED,
        );
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FAILED),
    );
  }
};
