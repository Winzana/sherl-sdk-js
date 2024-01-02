import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

/**
 * Retrieves subcategories for a specific product category within an organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} categoryId - The unique identifier of the main category whose subcategories are being retrieved.
 * @returns {Promise<ICategoryResponse[]>} A promise that resolves to an array of category responses, representing the subcategories of the specified main category.
 */
export const getOrganizationSubCategories = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED);
  }
};
