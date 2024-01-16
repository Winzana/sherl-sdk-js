import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductCategoryCreateInputDto,
} from '../../types';

/**
 * Updates a specific product category with new information.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} categoryId - The unique identifier of the category to be updated.
 * @param {Partial<IShopProductCategoryCreateInputDto>} updatedCategory - The new details to update the category with. This is a partial type, allowing for partial updates to the category's properties.
 * @returns {Promise<ICategoryResponse>} A promise that resolves to the category's updated information.
 */
export const updateCategory = async (
  fetcher: Fetcher,
  categoryId: string,
  updatedCategory: Partial<IShopProductCategoryCreateInputDto>,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.put<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
      updatedCategory,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.UPDATE_CATEGORY_FAILED);
  }
};
