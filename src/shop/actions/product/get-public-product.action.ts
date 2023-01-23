import { ApiResponse, Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { IPublicProductResponse } from '../../types/product/types';

export const getPublicProduct = async (
  fetcher: Fetcher,
  id: string,
): Promise<IPublicProductResponse> => {
  let response: ApiResponse<IPublicProductResponse> | null = null;

  try {
    response = await fetcher.get<IPublicProductResponse>(
      StringUtils.bindContext(endpoints.GET_PUBLIC_PRODUCT, { id }),
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
