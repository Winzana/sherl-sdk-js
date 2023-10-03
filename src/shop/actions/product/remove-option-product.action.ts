import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { IProductResponse } from '../../types';

export const removeOptionToProduit = async (
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.REMOVE_OPTION_FAILED);
  }
};
