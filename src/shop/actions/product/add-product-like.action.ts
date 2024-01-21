import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

/**
 * Adds a 'like' to a specific product identified by its unique ID.
 * Need `Analytics` domain to be used
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product to receive the 'like'.
 * @returns {Promise<number>} A promise that resolves to the updated count of 'likes' for the product.
 */
export const addLikeToProduct = async (
  fetcher: Fetcher,
  productId: string,
): Promise<number> => {
  try {
    const response = await fetcher.post<number>(
      StringUtils.bindContext(endpoints.PRODUCT_LIKE, { id: productId }),
      {},
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.ADD_PRODUCT_LIKE_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.ADD_PRODUCT_LIKE_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.ADD_PRODUCT_LIKE_FAILED),
    );
  }
};
