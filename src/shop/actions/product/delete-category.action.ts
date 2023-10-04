import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const deleteCategory = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.delete<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.DELETE_CATEGORY_FAILED);
  }
};
