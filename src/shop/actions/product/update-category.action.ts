import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const updateCategory = async (
  fetcher: Fetcher,
  categoryId: string,
  updatedCategory: any,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.put<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
      updatedCategory,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.UPDATE_CATEGORY_FAILED);
  }
};
