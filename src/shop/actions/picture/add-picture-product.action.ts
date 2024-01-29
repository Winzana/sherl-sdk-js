import { SherlError } from '../../../common';
import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { PictureErr, errorFactory } from '../../errors/picture/errors';
import { IProductResponse } from '../../types';

/**
 * Adds a picture to a specific product using its media ID.
 *
 * @param {Fetcher} fetcher - The fetcher instance used for making API requests.
 * @param {string} productId - The unique identifier of the product to which the picture is being added.
 * @param {string} mediaId - The unique identifier of the media (picture) to be added to the product.
 * @returns {Promise<IProductResponse>} A promise that resolves to the product's updated information, including the newly added picture.
 */
export const addPictureToProduct = async (
  fetcher: Fetcher,
  productId: string,
  mediaId: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.post<IProductResponse>(
      StringUtils.bindContext(endpoints.PICTURE_TO_PRODUCT, {
        productId,
        mediaId,
      }),
      {},
    );
    return response.data;
  } catch (error: SherlError | Error | any) {
    switch ((error as SherlError).data?.status) {
      case 403:
        throw errorFactory.create(PictureErr.ADD_PICTURE_PRODUCT_FORBIDDEN);
      case 404:
        throw errorFactory.create(PictureErr.PRODUCT_OR_MEDIA_NOT_FOUND);
      default:
        throw getSherlError(
          error,
          errorFactory.create(PictureErr.ADD_PICTURE_PRODUCT_FAILED),
        );
    }
  }
};
