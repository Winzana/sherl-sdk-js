import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_CATEGORY_BY_ID_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.GET_CATEGORY_BY_ID_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_CATEGORY_BY_ID_FAILED),
    );
  }
};
