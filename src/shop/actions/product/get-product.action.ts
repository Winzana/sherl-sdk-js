import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IProductResponse } from '../../types';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { getSherlError } from '../../../common/utils/errors';

export const getProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(
          ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FORBIDDEN,
        );
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FAILED);
    }
  } catch (error) {
    throw getSherlError(
      error,
      errorFactory.create(ProductErr.GET_PUBLIC_PRODUCT_BY_ID_FAILED),
    );
  }
};
