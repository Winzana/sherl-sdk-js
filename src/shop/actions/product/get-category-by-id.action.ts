import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

/**
 * Retrieves a specific product category by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} categoryId - The unique identifier of the category to be retrieved.
 * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array containing the response of the requested category.
 */
export const getCategoryById = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      StringUtils.bindContext(endpoints.CATEGORY, { id: categoryId }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
  }
};
