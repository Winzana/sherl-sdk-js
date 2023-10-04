import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

// Need `analytics` domain to be used
export const getProductLikes = async (
  fetcher: Fetcher,
  productId: string,
): Promise<number> => {
  try {
    const response = await fetcher.get<number>(
      StringUtils.bindContext(endpoints.PRODUCT_LIKE, { id: productId }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_PRODUCT_LIKES_FAILED);
  }
};
