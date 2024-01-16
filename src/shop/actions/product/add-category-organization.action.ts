import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductCategoryCreateInputDto,
} from '../../types';

/**
 * Adds a new product category to an organization.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {IShopProductCategoryCreateInputDto} category - The details of the category to be added to the organization.
 * @returns {Promise<ICategoryResponse>} A promise that resolves to the information of the newly added category.
 */
export const addCategoryToOrganization = async (
  fetcher: Fetcher,
  category: IShopProductCategoryCreateInputDto,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.post<ICategoryResponse>(
      endpoints.ORGANIZATION_CATEGORIES,
      category,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FORBIDDEN,
        );
      default:
        throw errorFactory.create(
          ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FAILED,
        );
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FAILED),
    );
  }
};
