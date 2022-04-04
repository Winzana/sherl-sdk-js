import { ApiResponse } from '../../common/api';
import { DiscountApi } from '../api/client';

/**
 * delete discount by id
 * @param id string
 * @returns
 */
export const deleteDiscountById = async (id: string): Promise<string> => {
  let response: ApiResponse<DiscountApi> | null = null;
  try {
    response = await DiscountApi.deleteDiscount(id);
  } catch ({ response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return JSON.stringify(response.data);
  }

  throw new Error('Empty response from API');
};
