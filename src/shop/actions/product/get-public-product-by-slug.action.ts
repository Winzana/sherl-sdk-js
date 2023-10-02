import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IPublicProductResponse } from '../../types';
import { ProductErr, errorFactory } from '../../errors/product/errors';

export const getPublicProductBySlug = async (
  fetcher: Fetcher,
  slug: string,
): Promise<IPublicProductResponse> => {
  try {
    const response = await fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT_SLUG, { slug }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
    }

    return response.data;
  } catch (error) {
    throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
  }
};
