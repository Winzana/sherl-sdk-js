import { ApiResponse } from '../../../common/api';
import { IPublicCategoryResponse } from '../../types/product/types';
import { ProductApi } from '../../api/product/client';

export const getPublicCategories = async (params?: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}): Promise<IPublicCategoryResponse[]> => {
  let response: ApiResponse<IPublicCategoryResponse[]> | null = null;

  try {
    response = await ProductApi.getPublicCategories(params);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
