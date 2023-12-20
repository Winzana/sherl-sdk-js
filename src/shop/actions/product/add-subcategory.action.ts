import { Fetcher } from '../../../common/api';
import { getSherlError } from '../../../common/utils/errors';
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

    switch (response.status) {
      case 200:
        return response.data;
      case 403:
        throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED_FORBIDDEN);
      case 404:
        throw errorFactory.create(ProductErr.CATEGORY_NOT_FOUND);
      default:
        throw errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED);
    }
  } catch (err) {
    throw getSherlError(
      err,
      errorFactory.create(ProductErr.ADD_SUBCATEGORY_FAILED),
    );
  }
};
