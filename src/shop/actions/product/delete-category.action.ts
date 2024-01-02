import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

/**
 * Deletes a product category identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} categoryId - The unique identifier of the category to be deleted.
 * @returns {Promise<ICategoryResponse>} A promise that resolves to the updated category information post-deletion.
 */
export const deleteCategory = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.delete<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.DELETE_CATEGORY_FAILED);
  }
};
