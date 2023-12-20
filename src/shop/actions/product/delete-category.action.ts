import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.DELETE_CATEGORY_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.DELETE_CATEGORY_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.DELETE_CATEGORY_FAILED),
    );
  }
};
