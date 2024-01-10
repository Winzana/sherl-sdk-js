import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

/**
 * Removes a picture from a specific product using its media ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product from which the picture is being removed.
 * @param {string} mediaId - The unique identifier of the media (picture) to be removed from the product.
 * @returns {Promise<IProductResponse>} A promise that resolves to the product's information after the picture has been removed.
 */
export const removePictureToProduct = async (
  fetcher: Fetcher,
  productId: string,
  mediaId: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.delete<IProductResponse>(
      StringUtils.bindContext(endpoints.PICTURE_TO_PRODUCT, {
        productId,
        mediaId,
      }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.REMOVE_PICTURE_PRODUCT_FAILED);
  }
};
