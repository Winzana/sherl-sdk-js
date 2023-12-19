import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { PictureErr, errorFactory } from '../../errors/picture/errors';
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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          PictureErr.REMOVE_PICTURE_PRODUCT_FAILED_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(PictureErr.PRODUCT_OR_MEDIA_NOT_FOUND);
      default:
        throw errorFactory.create(PictureErr.REMOVE_PICTURE_PRODUCT_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(PictureErr.REMOVE_PICTURE_PRODUCT_FAILED),
    );
  }
};
