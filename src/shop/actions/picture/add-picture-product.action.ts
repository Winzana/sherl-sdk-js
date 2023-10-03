import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

export const addPictureToProduct = async (
  fetcher: Fetcher,
  productId: string,
  mediaId: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.post<IProductResponse>(
      StringUtils.bindContext(endpoints.ADD_PICTURE_TO_PRODUCT, {
        productId,
        mediaId,
      }),
      {},
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_PICTURE_PRODUCT_FAILED);
  }
};
