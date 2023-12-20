import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IPublicProductResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';

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

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
  }
};
