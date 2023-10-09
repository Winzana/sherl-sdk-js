import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import { ICategoryResponse } from '../../types';

export const getOrganizationSubCategories = async (
  fetcher: Fetcher,
  categoryId: string,
): Promise<ICategoryResponse[]> => {
  try {
    const response = await fetcher.get<ICategoryResponse[]>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.GET_ORGANIZATION_CATEGORIES_FAILED);
  }
};
