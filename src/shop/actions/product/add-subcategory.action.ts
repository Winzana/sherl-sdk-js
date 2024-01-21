import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED),
    );
  }
};
