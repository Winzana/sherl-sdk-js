import { ApiResponse } from '../../../common/api';
import { IProductResponse } from '../../types/product/types';
import { ProductApi } from '../../api/product/client';

export const getProduct = async (id: string): Promise<IProductResponse> => {
  let response: ApiResponse<IProductResponse> | null = null;

  try {
    response = await ProductApi.getProduct(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
