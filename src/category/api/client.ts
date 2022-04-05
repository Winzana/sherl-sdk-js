import { ICategoryNew } from '../types';
import { endpoints } from './endpoints';
import { Fetcher } from '../../common/api';
import { errorFactory } from '../errors';
import { StringUtils } from '../../common/utils/string';
import { v4 as uuidv4 } from 'uuid';
const fetcher = new Fetcher(errorFactory);

class CategoryApi {
  /**
   * Post add new category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static postCategoryNew = (data: ICategoryNew) =>
    fetcher.post<ICategoryNew>(endpoints.POST_CATEGORY_NEW, {
      ...data,
      id: uuidv4(),
    });

  /**
   * Post add new sub category.
   *
   * @static
   * @memberof CategoryApi
   */
  public static postSubCategoryNew = (data: ICategoryNew, id: string) =>
    fetcher.post<ICategoryNew>(
      StringUtils.bindContext(endpoints.POST_NEW_SUB_CATEGORY, { id }),
      {
        ...data,
        id: uuidv4(),
      },
    );

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
