import { ApiResponse } from '../../common/api';
import { CategoryApi } from '../api/client';
import { ICategoryNew } from '../types';

/**
 *Create new sub category for product
 *
 * @param data
 * @returns
 */
export const addNewProductSubCategory = async (
  data: ICategoryNew,
  id: string,
): Promise<string> => {
  let response: ApiResponse<CategoryApi> | null = null;
  try {
    response = await CategoryApi.postSubCategoryNew(data, id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
