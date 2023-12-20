import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IPublicProductResponse } from '../../types';

/**
 * Retrieves a specific public product identified by its unique ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} id - The unique identifier of the public product to be retrieved.
 * @returns {Promise<IPublicProductResponse>} A promise that resolves to the detailed information of the specified public product.
 */
export const getPublicProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPublicProductResponse> => {
  try {
    const response = await fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT, { id }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
  }
};
