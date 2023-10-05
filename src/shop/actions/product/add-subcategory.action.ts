import { Fetcher } from '../../../common/api';
import { StringUtils } from '../../../common/utils/string';
import { endpoints } from '../../api/endpoints';
import { ProductErr, errorFactory } from '../../errors/product/errors';
import {
  ICategoryResponse,
  IShopProductSubCategoryCreateInputDto,
} from '../../types';

export const addSubCategoryToCategory = async (
  fetcher: Fetcher,
  categoryId: string,
  subCategory: IShopProductSubCategoryCreateInputDto,
): Promise<ICategoryResponse> => {
  try {
    const response = await fetcher.post<ICategoryResponse>(
      StringUtils.bindContext(endpoints.CATEGORY, {
        id: categoryId,
      }),
      subCategory,
    );
    return response.data;
  } catch (err) {
    throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED);
  }
};
