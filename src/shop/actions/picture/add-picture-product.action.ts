import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { PictureErr, errorFactory } from '../../errors/picture/errors';
import { IProductResponse } from '../../types';

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
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(PictureErr.ADD_PICTURE_PRODUCT_FORBIDDEN);
      case 404:
        throw errorFactory.create(PictureErr.PRODUCT_OR_MEDIA_NOT_FOUND);
      default:
        throw errorFactory.create(PictureErr.ADD_PICTURE_PRODUCT_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(PictureErr.ADD_PICTURE_PRODUCT_FAILED),
    );
  }
};
