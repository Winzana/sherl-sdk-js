import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

export const addOptionToProduit = async (
  fetcher: Fetcher,
  productId: string,
  option: any,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.post<IProductResponse>(
      StringUtils.bindContext(endpoints.ADD_OPTION_TO_PRODUCT, {
        id: productId,
      }),
      option,
    );

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.ADD_OPTION_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.ADD_OPTION_FAILED);
    }
  } catch (err) {
    throw getSherlError(err, errorFactory.create(ProductErr.ADD_OPTION_FAILED));
  }
};
