import { ApiResponse } from '../../common/api';
import { CategoryApi } from '../api/client';
import { ICategoryUpdate } from '../types';

/**
 *Update category by id
 *
 * @param data
 * @param id
 * @returns
 */
export const updateCategoryById = async (
  data: ICategoryUpdate,
  id: string,
): Promise<string> => {
  let response: ApiResponse<CategoryApi> | null = null;
  try {
    response = await CategoryApi.putCategory(data, id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
