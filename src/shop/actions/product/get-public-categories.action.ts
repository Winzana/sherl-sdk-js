import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';

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

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.CATEGORIES_FETCH_FAILED);
  }
};
