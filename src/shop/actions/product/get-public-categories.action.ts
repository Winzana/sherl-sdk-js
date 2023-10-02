import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';

export const getPublicCategories = async (
  fetcher: Fetcher,
): Promise<IPublicCategoryResponse[]> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES,
    );

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
  }
};
