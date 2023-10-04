import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

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
