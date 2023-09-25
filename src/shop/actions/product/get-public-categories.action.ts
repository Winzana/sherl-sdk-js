import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { IPublicCategoryResponse } from '../../types';
import { ApiResponse } from '../../../common/types/response';

export const getPublicCategories = async (
  fetcher: Fetcher,
  params?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
): Promise<IPublicCategoryResponse[]> => {
  let response: ApiResponse<IPublicCategoryResponse[]> | null = null;

  try {
    response = await fetcher.get<IPublicCategoryResponse[]>(
      endpoints.GET_PUBLIC_CATEGORIES,
      params,
    );
  } catch ({ name, response: responseError, stack, isAxiosError, ...rest }) {
    throw new Error('Cannot reach API');
  }

  if (response) {
    return response.data;
  }

  throw new Error('Empty response from API');
};
