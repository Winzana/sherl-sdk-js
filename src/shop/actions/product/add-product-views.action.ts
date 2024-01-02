import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

/**
 * Increments the view count for a specific product identified by its unique ID.
 * Need `Analytics` domain to be used
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product whose view count is being incremented.
 * @returns {Promise<number>} A promise that resolves to the updated view count of the product.
 */
export const addProductViews = async (
  fetcher: Fetcher,
  productId: string,
): Promise<number> => {
  try {
    const response = await fetcher.post<number>(
      StringUtils.bindContext(endpoints.PRODUCT_VIEWS, { id: productId }),
      {},
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_PRODUCT_VIEWS_FAILED);
  }
};
