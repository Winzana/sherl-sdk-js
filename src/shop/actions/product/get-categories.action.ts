import { ICategoryResponse } from '../../types/product/types';
import { ProductApi } from '../../api/product/client';

export const getCategories = async (
  organizationId: string,
  params?: { [key: string]: any },
): Promise<ICategoryResponse[]> => {
  const response = await ProductApi.getCategories(organizationId, params);
  return response.data;
};
