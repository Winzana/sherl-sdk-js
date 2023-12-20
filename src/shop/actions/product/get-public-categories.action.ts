import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a list of public product categories.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @returns {Promise<IPublicCategoryResponse[]>} A promise that resolves to an array of public category responses.
 */
export const getPublicCategories = async (
  fetcher: Fetcher,
): Promise<IPublicCategoryResponse[]> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORIES_FAILED_FORBIDDEN,
        );
      default:
        throw errorFactory.create(ProductErr.GET_PUBLIC_CATEGORIES_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_CATEGORIES_FAILED),
    );
  }
};
