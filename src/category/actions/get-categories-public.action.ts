import { ApiResponse } from '../../common/api';
import { CategoryApi } from '../api/client';

/**
 *Fetch  all public production categories
 *
 * @param none
 * @returns
 */
export const getAllPublicCategories = async (): Promise<string> => {
  let response: ApiResponse<CategoryApi> | null = null;
  try {
    response = await CategoryApi.getPublicCategories();
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
