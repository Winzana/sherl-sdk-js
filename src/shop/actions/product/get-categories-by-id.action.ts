import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const getCategoriesById = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      StringUtils.bindContext(endpoints.GET_CATEGORY, { id: categoryId }),
    );

    if (response.status !== 200) {
      throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
    }
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
  }
};
