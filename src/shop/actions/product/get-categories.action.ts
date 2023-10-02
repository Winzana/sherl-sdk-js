import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const getCategories = async (
  fetcher: Fetcher,
  organizationId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      endpoints.CATEGORIES_ALL,
      {
        organizationId,
      },
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
  }
};
