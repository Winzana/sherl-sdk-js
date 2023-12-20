import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductSubCategoryCreateInputDto,
} from '../../types';

/**
 * Adds a subcategory to a specific product category.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} categoryId - The unique identifier of the category to which the subcategory is being added.
 * @param {IShopProductSubCategoryCreateInputDto} subCategory - The details of the subcategory to be added.
 * @returns {Promise<ICategoryResponse>} A promise that resolves to the updated category information including the newly added subcategory.
 */
export const addSubCategoryToCategory = async (
  fetcher: Fetcher,
  categoryId: string,
  subCategory: IShopProductSubCategoryCreateInputDto,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.post<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
      subCategory,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED);
  }
};
