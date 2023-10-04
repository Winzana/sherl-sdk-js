import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const getUnrestrictedCategories = async (
  fetcher: Fetcher,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      endpoints.GET_UNRESTRICTED_CATEGORIES,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED);
  }
};
