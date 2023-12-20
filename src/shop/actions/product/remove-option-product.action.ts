import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

export const removeProductOption = async (
  fetcher: Fetcher,
  productId: string,
  optionId: string,
): Promise<IProductResponse> => {
  try {
    const response = await fetcher.delete<IProductResponse>(
      StringUtils.bindContext(endpoints.REMOVE_OPTION_FROM_PRODUCT, {
        productId,
        optionId,
      }),
    );
    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.REMOVE_OPTION_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.OPTION_OR_PRODUCT_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.REMOVE_OPTION_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.REMOVE_OPTION_FAILED),
    );
  }
};
