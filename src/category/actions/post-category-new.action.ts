import { ApiResponse } from '../../common/api';
import { CategoryApi } from '../api/client';
import { ICategoryNew } from '../types';

/**
 *Create new category for product
 *
 * @param data
 * @returns
 */
export const addNewProductCategory = async (
  data: ICategoryNew,
): Promise<string> => {
  let response: ApiResponse<CategoryApi> | null = null;
  try {
    response = await CategoryApi.postCategoryNew(data);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
