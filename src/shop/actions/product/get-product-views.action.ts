import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

// Need `analytics` domain to be used
/**
 * Retrieves the total number of views for a specific product identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product whose views count is being retrieved.
 * @returns {Promise<number>} A promise that resolves to the number representing the total views of the product.
 */
export const getProductViews = async (
  fetcher: Fetcher,
  productId: string,
): Promise<number> => {
  try {
    const response = await fetcher.get<number>(
      StringUtils.bindContext(endpoints.PRODUCT_VIEWS, { id: productId }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.PRODUCT_VIEWS_FAILED);
  }
};
