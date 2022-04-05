import { ApiResponse } from '../../common/api';
import { CategoryApi } from '../api/client';

/**
 *Delete production category by id
 *
 * @param id
 * @returns
 */
export const deleteCategoryById = async (id: string): Promise<string> => {
  let response: ApiResponse<CategoryApi> | null = null;
  try {
    response = await CategoryApi.deleteCategory(id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
