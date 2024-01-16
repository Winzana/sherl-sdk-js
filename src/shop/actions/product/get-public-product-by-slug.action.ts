import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IPublicProductResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

/**
 * Retrieves a specific public product identified by its slug.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} slug - The slug identifier of the public product to be retrieved. Slugs are typically used in URLs to represent the product in a readable format.
 * @returns {Promise<IPublicProductResponse>} A promise that resolves to the detailed information of the specified public product.
 */
export const getPublicProductBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IPublicProductResponse> => {
  try {
    const response = await fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT_SLUG, { slug }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCT_BY_SLUG_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.SLUG_PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.GET_PUBLIC_PRODUCT_BY_SLUG_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_PRODUCT_BY_SLUG_FAILED),
    );
  }
};
