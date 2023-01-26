import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ICategoryResponse } from '../../types/product/types';

export const getCategories = async (
  fetcher: Fetcher,
  organizationId: string,
  params?: { [key: string]: any },
): Promise<ICategoryResponse[]> => {
  const response = await fetcher.get<ICategoryResponse[]>(
    endpoints.CATEGORIES_ALL,
    {
      ...params,
      organizationId,
    },
  );
  return response.data;
};
