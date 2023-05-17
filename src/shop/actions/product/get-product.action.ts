import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { IProductResponse } from '../../types';
import { endpoints } from '../../api/endpoints';
import { ApiResponse } from '../../../common/types/response';

export const getProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IProductResponse> => {
  let response: ApiResponse<IProductResponse> | null = null;

  try {
    response = await fetcher.get<IProductResponse>(
      StringUtils.bindContext(endpoints.GET_PRODUCT, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
