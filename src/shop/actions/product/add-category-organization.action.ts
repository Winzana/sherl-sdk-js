import { Fetcher } from '../../../common/api';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductCategoryCreateInputDto,
} from '../../types';

export const addCategoryToOrganization = async (
  fetcher: Fetcher,
  category: IShopProductCategoryCreateInputDto,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.post<ICategoryResponse>(
      endpoints.ORGANIZATION_CATEGORIES,
      category,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_CATEGORY_TO_ORGANIZATION_FAILED);
  }
};
