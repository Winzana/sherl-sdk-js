import { ApiResponse } from '../../../common/api';
import { IDiscountResponse } from '../../types/discount/types';
import { DiscountApi } from '../../api/discount/client';

export const getDiscount = async (id: string): Promise<IDiscountResponse> => {
  let response: ApiResponse<IDiscountResponse> | null = null;

  try {
    response = await DiscountApi.getDiscount(id);
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
