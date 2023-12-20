import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED,
        );
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_UNRESTRICTED_CATEGORIES_FAILED),
    );
  }
};
