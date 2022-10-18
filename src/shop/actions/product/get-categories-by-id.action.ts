import { ICategoryResponse } from '../../types/product/types';
import { ProductApi } from '../../api/product/client';

export const getCategoriesById = async (
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  const response = await ProductApi.getCategoriesById(categoryId);
  return response.data;
};
