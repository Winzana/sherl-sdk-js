import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

/**
 * Retrieves the total number of 'likes' for a specific product identified by its unique ID.
 * Need `Analytics` domain to be used
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product whose 'likes' count is being retrieved.
 * @returns {Promise<number>} A promise that resolves to the number representing the total 'likes' for the product.
 */
export const getProductLikes = async (
  fetcher: Fetcher,
  productId: string,
): Promise<number> => {
  try {
    const response = await fetcher.get<number>(
      StringUtils.bindContext(endpoints.PRODUCT_LIKE, { id: productId }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PRODUCT_LIKES_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.GET_PRODUCT_LIKES_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.GET_PRODUCT_LIKES_FAILED),
    );
  }
};
