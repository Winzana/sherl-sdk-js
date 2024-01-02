import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IProductResponse } from '../../types';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

/**
 * Retrieves details of a specific product identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the product to be retrieved.
 * @returns {Promise<IProductResponse>} A promise that resolves to the detailed information of the specified product.
 */
export const getProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
  }
};
