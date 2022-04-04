import { ICategoryNew } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';

const fetcher = new Fetcher(errorFactory);

class CategoryApi {
  /**
   * Post add new category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static postCategoryNew = (data: ICategoryNew) =>
    fetcher.post<ICategoryNew>(endpoints.POST_CATEGORY_NEW, data);

  /**
   * Get categories.
   *
   * @static
   * @memberof CategoryApi
   */
  public static getProductionCategories = (id: string) =>
    fetcher.get<ICategoryNew>(
      StringUtils.bindContext(endpoints.GET__CATEGORIS, { id }),
    );
}

export { CategoryApi };
