import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IDiscountResponse } from '../../types';
import { ApiResponse } from "../../../common";

export const getDiscount = async (
  fetcher: Fetcher,
  id: string,
): Promise<IDiscountResponse> => {
  let response: ApiResponse<IDiscountResponse> | null = null;

  try {
    response = await fetcher.get<IDiscountResponse>(
      StringUtils.bindContext(endpoints.GET_DISCOUNT_ID, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
