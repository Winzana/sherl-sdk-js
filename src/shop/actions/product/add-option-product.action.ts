import { Fetcher } from '../../../common/api';
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
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_OPTION_FAILED);
  }
};
