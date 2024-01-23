import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IPublicCategoryResponse } from '../../types';

/**
 * Retrieves a specific public product category identified by its slug.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} slug - The slug identifier of the public category to be retrieved.
 * @returns {Promise<IPublicCategoryResponse>} A promise that resolves to the detailed information of the specified public category.
 */
export const getPublicCategoryBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IPublicCategoryResponse> => {
  try {
    const response = await fetcher.get<IPublicCategoryResponse>(
      endpoints.GET_PUBLIC_CATEGORIES_SLUG,
      { slug },
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(ProductErr.GET_PUBLIC_CATEGORY_BY_SLUG_FAILED),
        );
    }
  }
};
