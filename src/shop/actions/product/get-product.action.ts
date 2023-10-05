import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IProductResponse } from '../../types';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';

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
